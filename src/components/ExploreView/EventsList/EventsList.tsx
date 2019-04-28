import React from 'react';
import './EventsList.scss';
import EventPreview from '../EventPreview/EventPreview';

const EventsList: React.FC<{ cols: number; events: Array<any> }> = (props) => {
	return (
		<div className={`events-list column is-${props.cols}`}>
			{props.events.map((el) => <EventPreview key={el.id} event={el} />)}
		</div>
	);
};

export default EventsList;
