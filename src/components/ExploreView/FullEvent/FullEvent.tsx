import React from 'react';
import './FullEvent.scss';

const FullEvent: React.FC<{ event: any }> = (props) => {
	return (
		<article className="full-event message is-small">
			<div style={{ borderWidth: 0 }} className="message-body columns is-mobile">
				<div
					className="column is-1 has-text-centered"
					style={{ width: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
				>
					<div className="event-rate">
						<span>
							<i className="fas fa-angle-up" />
						</span>
					</div>
					<div>{'5'}</div>
					<div className="event-rate">
						<span>
							<i className="fas fa-angle-down" />
						</span>
					</div>
				</div>

				<div className="column is-11">
					<h3 className="event-title title is-4">{props.event.title}</h3>
					<div className="event-data">
						<span className={`event-interest event-${props.event.interest.name}`}>
							{props.event.interest.name}
						</span>
						<span className="event-start-date">{props.event.startAt}</span>
						<span className="event-address">| {props.event.address}</span>
					</div>
				</div>
			</div>
			<div style={{ padding: '0 10px', minHeight: 250 }}>
				<div style={{ float: 'left', width: 400, height: 250, padding: '0 15px' }}>
					<img
						src="http://placekitten.com/1000/600"
						alt="qwe"
						style={{ height: 250, width: 400, objectFit: 'cover' }}
					/>
				</div>
				<div style={{ fontSize: 14 }}>{props.event.body}</div>
			</div>
			<hr />
			<div>
				<h2 className="title is-5">Instagram feed</h2>
				TODO
			</div>
		</article>
	);
};

export default FullEvent;
