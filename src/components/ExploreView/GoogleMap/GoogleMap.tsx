import React from 'react';
import GoogleMapReact from 'google-map-react';
import InterestCheckbox from '../../Common/InterestCheckbox/InterestCheckbox';
import { Query, QueryResult } from 'react-apollo';
import { GET_INTERESTS } from '../../../graphql/queries';
import Loading from '../../Common/Loading/Loading';

const GoogleMap: React.FC<{ events: Array<any> }> = (props) => {
	return (
		<div className={`google-map column`} style={{ padding: 0, position: 'relative' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY || '' }}
				defaultCenter={{ lat: 45.252467, lng: 19.827957 }}
				defaultZoom={13}
			>
				{/* <MapMarker position={...} color={event.interest.color} /> */}
			</GoogleMapReact>
			<Query query={GET_INTERESTS}>
				{({ loading, error, data }: QueryResult) => {
					if (loading) return <Loading />;
					if (error) return `Error! ${error.message}`;
					return (
						<InterestCheckbox
							style={{ position: 'absolute', bottom: 5, left: 5 }}
							width="200px"
							interests={data.interests}
						/>
					);
				}}
			</Query>
		</div>
	);
};

export default GoogleMap;
