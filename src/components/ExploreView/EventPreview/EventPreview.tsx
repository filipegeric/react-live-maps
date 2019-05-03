import React from 'react';
import './EventPreview.scss';
import { Mutation } from 'react-apollo';
import { VOTE } from '../../../graphql/mutations';
import Loading from '../../Common/Loading/Loading';
import { Event } from '../../../models/Event';

const EventPreview: React.FC<{ event: Event; focusEvent: () => void }> = ({
  event,
  focusEvent
}) => {
  return (
    <article className="event-preview message is-small">
      <div className="message-body columns is-mobile">
        <div className="votes-column column is-1 has-text-centered">
          <Mutation<{vote: boolean}, {eventId: number; sign: number}> mutation={VOTE}>
            {(vote, { data, loading, error }) => (
              <React.Fragment>
                <div
                  onClick={() =>
                    vote({ variables: { eventId: event.id, sign: 1 } }).then(console.log)
                  }
                  className="event-rate"
                >
                  <span>
                    <i className="fas fa-angle-up" />
                  </span>
                </div>
                <div>{loading ? <Loading size={15} /> : '5'}</div>
                <div
                  onClick={() =>
                    vote({ variables: { eventId: event.id, sign: -1 } })
                  }
                  className="event-rate"
                >
                  <span>
                    <i className="fas fa-angle-down" />
                  </span>
                </div>
              </React.Fragment>
            )}
          </Mutation>
        </div>

        <div className="image-column column is-2">
          <img
            src="http://placekitten.com/600/400"
            alt="event-img"
            className="event-image"
          />
        </div>

        <div className="column is-8">
          <h3 className="event-title">{event.title}</h3>
          <div className="event-data">
            <span
              className={`event-interest event-${event.interest &&
                event.interest.name}`}
            >
              {event.interest && event.interest.name}
            </span>
            <span className="event-start-date">{event.startAt}</span>
            <span className="event-address">| {event.address}</span>
          </div>
        </div>

        <div className="right-arrow-column column is-1 has-text-centered">
          <span onClick={focusEvent}>
            <i className="fas fa-angle-right" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventPreview;
