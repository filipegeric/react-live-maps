import React from 'react';
import './EventPreview.scss';

const EventPreview: React.FC<{ event: any }> = ({ event }) => {
	return (
		<article className="event-preview message is-small">
			<div className="message-body columns is-mobile">
				<div
					className="column is-1 has-text-centered"
					style={{ width: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
				>
					<div className="event-rate">
						<a>
							<i className="fas fa-angle-up" />
						</a>
					</div>
					<div>{'5'}</div>
					<div className="event-rate">
						<a>
							<i className="fas fa-angle-down" />
						</a>
					</div>
				</div>

				<div className="column is-2" style={{ padding: 0, marginTop: 'auto', marginBottom: 'auto' }}>
					<img src="http://placekitten.com/400/600" alt="event-img" className="event-image" />
				</div>

				<div className="column is-8">
					<h3 className="event-title">{event.title}</h3>
					<div className="event-data">
						<span className={`event-interest event-${event.interest.name}`}>{event.interest.name}</span>
						<span className="event-start-date">{event.startAt}</span>
						<span className="event-address">| {event.address}</span>
					</div>
				</div>

				<div
					className="column is-1 has-text-centered"
					style={{ marginTop: 'auto', marginBottom: 'auto', padding: 0, paddingRight: '5px' }}
				>
					<a>
						<i className="fas fa-angle-right" style={{ paddingRight: '5px' }} />
					</a>
				</div>
			</div>
		</article>
	);
};

export default EventPreview;
