import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import InterestCheckbox from '../../Common/InterestCheckbox/InterestCheckbox';
import { Query, QueryResult } from 'react-apollo';
import { GET_INTERESTS } from '../../../graphql/queries';
import Loading from '../../Common/Loading/Loading';
import { connect, DispatchProp } from 'react-redux';
import { focusEvent } from '../../../store/actions';

const MapMarker: React.FC<{ title: string; color?: string; lat: number; lng: number; onClick: () => void }> = (
	props
) => {
	return (
		<svg
			onClick={props.onClick}
			style={{
				width: '50px',
				height: '50px',
				transform: 'scale(0.5) translateX(-100%) translateY(-150%)',
				cursor: 'pointer'
			}}
		>
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

const GoogleMap: React.FC<{ events: Array<any>; focusedEvent: any } & DispatchProp> = (props) => {
	const [ checkboxVisible, setCheckboxVisible ] = useState(true);
	const [ map, setMap ] = useState(null);
	if (props.focusedEvent && map) {
		(map as any).panTo({ lat: props.focusedEvent.lat, lng: props.focusedEvent.long });
		(map as any).setZoom(16);
	}
	if (!props.focusedEvent && map && (map as any).zoom > 13) {
		(map as any).panTo({ lat: 45.252467, lng: 19.827957 });
		(map as any).setZoom(13);
	}
	return (
		<div className={`google-map column`} style={{ padding: 0, position: 'relative' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY || '' }}
				defaultCenter={{ lat: 45.252467, lng: 19.827957 }}
				defaultZoom={13}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map }) => setMap(map)}
			>
				{props.events.map((el) => (
					<MapMarker
						title={el.title}
						key={el.id}
						lat={el.lat}
						lng={el.long}
						color={el.interest.color}
						onClick={() => props.dispatch(focusEvent(el))}
					/>
				))}
			</GoogleMapReact>
			<Query query={GET_INTERESTS}>
				{({ loading, error, data }: QueryResult) => {
					if (loading)
						return (
							<div style={{ position: 'absolute', bottom: 25, left: 5 }}>
								<Loading color="#2da8ee" />
							</div>
						);
					if (error) return `Error! ${error.message}`;
					return (
						<React.Fragment>
							{checkboxVisible && (
								<InterestCheckbox
									style={{ position: 'absolute', bottom: 25, left: 5 }}
									width="200px"
									interests={data.interests}
								/>
							)}
							<button
								onClick={() => setCheckboxVisible((prev) => !prev)}
								style={{
									width: '200px',
									height: '20px',
									position: 'absolute',
									bottom: 5,
									left: 5,
									padding: 0,
									lineHeight: 1
								}}
								className="button is-primary"
							>
								{checkboxVisible ? 'Hide' : 'Show'}
							</button>
						</React.Fragment>
					);
				}}
			</Query>
		</div>
	);
};

export default connect((state: any) => ({
	focusedEvent: state.focusedEvent
}))(GoogleMap);
