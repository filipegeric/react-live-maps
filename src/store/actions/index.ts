// action types
export const ADD_INTEREST = 'ADD_INTEREST';
export const REMOVE_INTEREST = 'REMOVE_INTEREST';

// action creators
export const addInterest = (interestId: string | number) => ({
	type: ADD_INTEREST,
	payload: interestId
});

export const removeInterest = (interestId: string | number) => ({
	type: REMOVE_INTEREST,
	payload: interestId
});
