import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import InterestCheckbox from '../../Common/InterestCheckbox/InterestCheckbox';
import { Query, QueryResult } from 'react-apollo';
import { GET_INTERESTS } from '../../../graphql/queries';
import Loading from '../../Common/Loading/Loading';
import { connect, DispatchProp } from 'react-redux';
import { focusEvent } from '../../../store/actions';
import './GoogleMap.scss';
import { Event } from '../../../models/Event';
import { MainState } from '../../../store/types';
import { google } from 'google-maps';

const MapMarker: React.FC<{
  title: string;
  color?: string | null;
  lat: number;
  lng: number;
  onClick: () => void;
}> = props => {
  return (
    <svg className="map-marker" onClick={props.onClick}>
      <title>{props.title}</title>
      <path
        style={{
          fill: props.color || 'red'
        }}
        d="M38.853,5.324L38.853,5.324c-7.098-7.098-18.607-7.098-25.706,0h0 C6.751,11.72,6.031,23.763,11.459,31L26,52l14.541-21C45.969,23.763,45.249,11.72,38.853,5.324z M26.177,24c-3.314,0-6-2.686-6-6 s2.686-6,6-6s6,2.686,6,6S29.491,24,26.177,24z"
      />
    </svg>
  );
};

const GoogleMap: React.FC<
  { events: Array<Event>; focusedEvent: Event } & DispatchProp
> = props => {
  const [checkboxVisible, setCheckboxVisible] = useState(true);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  if (props.focusedEvent && map) {
    map.panTo({
      lat: props.focusedEvent.lat,
      lng: props.focusedEvent.long
    });
    map.setZoom(16);
  }
  if (!props.focusedEvent && map && map.getZoom() > 13) {
    map.panTo({ lat: 45.252467, lng: 19.827957 });
    map.setZoom(13);
  }
  return (
    <div className="google-map column">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY || '' }}
        defaultCenter={{ lat: 45.252467, lng: 19.827957 }}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => setMap(map)}
      >
        {props.events.map(el => (
          <MapMarker
            title={el.title}
            key={el.id}
            lat={el.lat}
            lng={el.long}
            color={el.interest && el.interest.color}
            onClick={() => props.dispatch(focusEvent(el))}
          />
        ))}
      </GoogleMapReact>
      <Query query={GET_INTERESTS}>
        {({ loading, error, data }: QueryResult) => {
          if (loading)
            return (
              <div className="loading-wrapper">
                <Loading />
              </div>
            );
          if (error) return `Error! ${error.message}`;
          return (
            <React.Fragment>
              {checkboxVisible && (
                <InterestCheckbox
                  style={{
                    position: 'absolute',
                    bottom: 25,
                    left: 5,
                    width: 200
                  }}
                  interests={data.interests}
                />
              )}
              <button
                onClick={() => setCheckboxVisible(prev => !prev)}
                className="interests-toggle-button button is-primary"
              >
                {checkboxVisible ? 'Hide' : 'Show interests'}
              </button>
            </React.Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default connect((state: MainState) => ({
  focusedEvent: state.focusedEvent
}))(GoogleMap);
