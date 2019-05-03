import React from 'react';
import './FullEvent.scss';
import Slider from '../Slider/Slider';
import { Event } from '../../../models/Event';

const FullEvent: React.FC<{ event: Event }> = props => {
  return (
    <article className="full-event message is-small">
      <div className="message-body columns is-mobile">
        <div className="vote-column column is-1 has-text-centered">
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
            <span
              className={`event-interest event-${props.event.interest && props.event.interest.name}`}
            >
              {props.event.interest && props.event.interest.name}
            </span>
            <span className="event-start-date">{props.event.startAt}</span>
            <span className="event-address">| {props.event.address}</span>
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src="http://placekitten.com/1000/600" alt="qwe" />
      </div>
      <div className="event-body">{props.event.body}</div>
      <hr />
      <div>
        <h2 className="title is-5">Instagram feed</h2>
        <Slider
          items={[
            'http://placekitten.com/400/200',
            'http://placekitten.com/400/250',
            'http://placekitten.com/500/200',
            'http://placekitten.com/600/200'
          ]}
        />
        <h2 className="title is-5">Checkins</h2>
      </div>
    </article>
  );
};

export default FullEvent;
