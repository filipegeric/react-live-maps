import { combineReducers } from 'redux';
import {
	ADD_INTEREST,
	REMOVE_INTEREST,
	SET_MODAL_ACTIVE,
	SET_MODAL_CONTENT,
	FOCUS_EVENT,
	UNFOCUS_EVENT
} from '../actions';

const initialInterests: Array<string | number> = [];

const interestsReducer = (state = initialInterests, action: { type: string; payload: string | number }) => {
	switch (action.type) {
		case ADD_INTEREST:
			return [ ...state, action.payload ];
		case REMOVE_INTEREST:
			return state.filter((el) => el !== action.payload);
		default:
			return state;
	}
};

const initialModalState = {
	isActive: false,
	content: ''
};

const modalReducer = (state = initialModalState, action: { type: string; payload: any }) => {
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

const focusedEventReducer = (state = null, action: { type: string; payload: any }) => {
	switch (action.type) {
		case FOCUS_EVENT:
			return action.payload;
		case UNFOCUS_EVENT:
			return null;
		default:
			return state;
	}
};

const reducers = combineReducers({
	interests: interestsReducer,
	modal: modalReducer,
	focusedEvent: focusedEventReducer
});

export default reducers;
