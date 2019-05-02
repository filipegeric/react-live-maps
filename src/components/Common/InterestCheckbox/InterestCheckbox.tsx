import React, { ChangeEvent, CSSProperties } from 'react';
import './InterestCheckbox.scss';
import { connect, DispatchProp } from 'react-redux';
import {
  addInterest,
  removeInterest,
  unfocusEvent
} from '../../../store/actions';
import { Interest } from '../../../models/Interest';
import { Event } from '../../../models/Event';
import { MainState } from '../../../store/types';

interface Props {
  interests: Array<Interest>;
  style?: CSSProperties;
}

const InterestCheckbox: React.FC<
  Props & {
    checkedInterests: Array<string | number>;
    focusedEvent: Event;
  } & DispatchProp
> = props => {
  const { interests } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      props.dispatch(addInterest(e.target.value));
    } else {
      props.dispatch(removeInterest(e.target.value));
    }
    if (props.focusedEvent) {
      props.dispatch(unfocusEvent());
    }
  };

  return (
    <form style={{ ...props.style }} className="interest-checkbox">
      <ul>
        {interests.map(el => (
          <li key={el.id}>
            <span>{el.name}</span>
            <div className="is-pulled-right">
              <input
                type="checkbox"
                name="interest"
                value={el.id}
                id={el.name}
                className="switch-input"
                onChange={handleChange}
                checked={props.checkedInterests.includes(el.id)}
              />
              <label
                htmlFor={el.name}
                className={`switch-label label-${el.name}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default connect((state: MainState) => ({
  checkedInterests: state.interests,
  focusedEvent: state.focusedEvent
}))(InterestCheckbox);
