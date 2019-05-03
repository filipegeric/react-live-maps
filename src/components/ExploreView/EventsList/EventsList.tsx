import React from 'react';
import './EventsList.scss';
import EventPreview from '../EventPreview/EventPreview';
import { connect, DispatchProp } from 'react-redux';
import { focusEvent, unfocusEvent } from '../../../store/actions';
import FullEvent from '../FullEvent/FullEvent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Event } from '../../../models/Event';
import { MainState } from '../../../store/types';

const EventsList: React.FC<
  { events: Array<Event>; focusedEvent: Event } & DispatchProp
> = props => {
  return (
    <div className={`events-list column is-${props.focusedEvent ? 6 : 5}`}>
      {!props.focusedEvent && (
        <TransitionGroup>
          {props.events.map(el => (
            <CSSTransition key={el.id} timeout={300} classNames="fade-left">
              <EventPreview
                event={el}
                focusEvent={() => props.dispatch(focusEvent(el))}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}

      {props.focusedEvent && (
        <React.Fragment>
          <FullEvent event={props.focusedEvent} />
          <button
            onClick={() => props.dispatch(unfocusEvent())}
            className="button is-primary is-small"
            style={{ position: 'absolute', top: 10, right: 5 }}
          >
            <i className="fas fa-angle-left" /> Go back
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default connect((state: MainState) => ({
  focusedEvent: state.focusedEvent
}))(EventsList);
