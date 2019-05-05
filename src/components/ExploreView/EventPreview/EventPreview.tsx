import React, { useState } from 'react';
import './EventPreview.scss';
import { Mutation } from 'react-apollo';
import { VOTE } from '../../../graphql/mutations';
import { Event } from '../../../models/Event';

const EventPreview: React.FC<{
  event: Event;
  focusEvent: () => void;
  voted: number;
}> = props => {
  const [voted, setVoted] = useState(props.voted);
  const [voteCount, setVoteCount] = useState(
    props.event.votes.reduce((sum, el) => sum + el.sign, 0)
  );
  return (
    <article className="event-preview message is-small">
      <div className="message-body columns is-mobile">
        <div className="votes-column column is-1 has-text-centered">
          <Mutation<{ vote: boolean }, { eventId: number; sign: number }>
            mutation={VOTE}
          >
            {(vote, { loading }) => (
              <React.Fragment>
                <div
                  onClick={() =>
                    vote({
                      variables: { eventId: props.event.id, sign: 1 }
                    }).then(res => {
                      setVoted(1);
                      setVoteCount(p => p + 1);
                    })
                  }
                  className="event-rate"
                  style={{ color: voted === 1 ? 'green' : 'black' }}
                >
                  <span>
                    <i className="fas fa-angle-up" />
                  </span>
                </div>
                <div>{loading ? 'loading' : voteCount}</div>
                <div
                  onClick={() =>
                    vote({
                      variables: { eventId: props.event.id, sign: -1 }
                    }).then(res => {
                      setVoted(-1);
                      setVoteCount(p => p - 1);
                    })
                  }
                  className="event-rate"
                  style={{ color: voted === -1 ? 'red' : 'black' }}
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
          <h3 className="event-title">{props.event.title}</h3>
          <div className="event-data">
            <span
              className={`event-interest event-${props.event.interest &&
                props.event.interest.name}`}
            >
              {props.event.interest && props.event.interest.name}
            </span>
            <span className="event-start-date">{props.event.startAt}</span>
            <span className="event-address">| {props.event.address}</span>
          </div>
        </div>

        <div className="right-arrow-column column is-1 has-text-centered">
          <span onClick={props.focusEvent}>
            <i className="fas fa-angle-right" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventPreview;
