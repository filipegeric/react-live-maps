import React from 'react';
import './EventsList.scss';
import EventPreview from '../EventPreview/EventPreview';
import { connect, DispatchProp } from 'react-redux';
import { focusEvent, unfocusEvent } from '../../../store/actions';

const EventsList: React.FC<{ events: Array<any>; focusedEvent: any } & DispatchProp> = (props) => {
	return (
		<div className={`events-list column is-${props.focusedEvent ? 6 : 5}`}>
			{!props.focusedEvent &&
				props.events.map((el) => (
					<EventPreview key={el.id} event={el} focusEvent={() => props.dispatch(focusEvent(el))} />
				))}
			{props.focusedEvent && (
				<div>
					{JSON.stringify(props.focusedEvent)}
					<button onClick={() => props.dispatch(unfocusEvent())}>unfocus</button>
				</div>
			)}
		</div>
	);
};

export default connect((state: any) => ({
	focusedEvent: state.focusedEvent
}))(EventsList);
