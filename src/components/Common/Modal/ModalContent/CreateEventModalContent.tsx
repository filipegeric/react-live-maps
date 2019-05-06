import React, { useState } from 'react';
import { Query, QueryResult, Mutation } from 'react-apollo';
import { GET_INTERESTS } from '../../../../graphql/queries';
import { Interest } from '../../../../models/Interest';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../../ExploreView/GoogleMapMarker/GoogleMapMarker';
import { CREATE_EVENT } from '../../../../graphql/mutations';

const CreateEventModalContent: React.FC<any> = () => {
  const [draggable, setDraggable] = useState(true);
  const [markerLat, setMarkerLat] = useState(45.252467);
  const [markerLng, setMarkerLng] = useState(19.847957);
  // Form Data --------------
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [address, setAddress] = useState('');
  const [hashtag, setHashtag] = useState('#');
  const [interest, setInterest] = useState('-1');
  // -------------------------
  return (
    <div className="create-event-modal-content">
      <h2 className="title is-3">Create new event</h2>
      <Mutation<any, any> mutation={CREATE_EVENT}>
        {createEvent => (
          <form
            onSubmit={e => {
              e.preventDefault();
              createEvent({
                variables: {
                  title,
                  body,
                  img: 'http://placekitten.com/400/400',
                  permanent: true,
                  address,
                  hashtag,
                  interestId: +interest,
                  lat: markerLat,
                  long: markerLng
                }
              })
                .then(console.log)
                .catch(console.log);
            }}
          >
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  onChange={e => setBody(e.target.value)}
                />
              </div>
            </div>

            <div className="field" style={{ height: 200 }}>
              <GoogleMapReact
                draggable={draggable}
                onChildMouseDown={() => {
                  setDraggable(false);
                }}
                onChildMouseUp={() => {
                  setDraggable(true);
                }}
                onChildMouseMove={(_, __, newCords) => {
                  setMarkerLat(newCords.lat);
                  setMarkerLng(newCords.lng);
                }}
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_API_KEY || ''
                }}
                defaultCenter={{ lat: 45.252467, lng: 19.847957 }}
                defaultZoom={13}
                yesIWantToUseGoogleMapApiInternals
              >
                <MapMarker key={1} lat={markerLat} lng={markerLng} />
              </GoogleMapReact>
            </div>

            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Hashtag</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={hashtag}
                  onChange={e => setHashtag(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Interest</label>
              <div className="control">
                <div className="select">
                  <select
                    onChange={e => setInterest(e.target.value)}
                    style={{ textTransform: 'capitalize' }}
                  >
                    <Query query={GET_INTERESTS}>
                      {({
                        loading,
                        error,
                        data
                      }: QueryResult<{ interests: Array<Interest> }>) => {
                        if (!loading && !error && data) {
                          return (
                            <React.Fragment>
                              {data.interests.map(el => (
                                <option
                                  key={el.id}
                                  value={el.id}
                                  style={{ textTransform: 'capitalize' }}
                                >
                                  {el.name}
                                </option>
                              ))}
                            </React.Fragment>
                          );
                        }
                      }}
                    </Query>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <button className="button is-primary is-pulled-right">
                Create
              </button>
            </div>
          </form>
        )}
      </Mutation>
    </div>
  );
};

export default CreateEventModalContent;
