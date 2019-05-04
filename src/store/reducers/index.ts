import { combineReducers } from 'redux';
import {
  ADD_INTEREST,
  REMOVE_INTEREST,
  SET_MODAL_ACTIVE,
  SET_MODAL_CONTENT,
  FOCUS_EVENT,
  UNFOCUS_EVENT,
  SET_USER
} from '../actions';
import { Action, ModalState } from '../types';

const initialInterests: Array<string | number> = [];
const interestsReducer = (state = initialInterests, action: Action) => {
  switch (action.type) {
    case ADD_INTEREST:
      return [...state, action.payload].sort((b, a) => b - a);
    case REMOVE_INTEREST:
      return state.filter(el => el !== action.payload);
    default:
      return state;
  }
};

const initialModalState: ModalState = {
  isActive: false,
  content: ''
};
const modalReducer = (state = initialModalState, action: Action) => {
  switch (action.type) {
    case SET_MODAL_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      };
    case SET_MODAL_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

const focusedEventReducer = (state = null, action: Action) => {
  switch (action.type) {
    case FOCUS_EVENT:
      return action.payload;
    case UNFOCUS_EVENT:
      return null;
    default:
      return state;
  }
};

const userReducer = (state = null, action: Action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  interests: interestsReducer,
  modal: modalReducer,
  focusedEvent: focusedEventReducer,
  user: userReducer
});

export default reducers;
