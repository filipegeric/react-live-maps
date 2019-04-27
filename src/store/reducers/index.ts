import { combineReducers } from 'redux';
import { ADD_INTEREST, REMOVE_INTEREST } from '../actions';

const initialState: Array<string | number> = [];

const interestsReducer = (state = initialState, action: { type: string; payload: string | number }) => {
	switch (action.type) {
		case ADD_INTEREST:
			return [ ...state, action.payload ];
		case REMOVE_INTEREST:
			return state.filter((el) => el != action.payload);
		default:
			return state;
	}
};

const reducers = combineReducers({
	interests: interestsReducer
});

export default reducers;
