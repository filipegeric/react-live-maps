// Checked interests state
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

// Modal state
// action types
export const SET_MODAL_ACTIVE = 'SET_MODAL_ACTIVE';
export const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT';

// action creators
export const setModalActive = (isActive: boolean) => ({
	type: SET_MODAL_ACTIVE,
	payload: isActive
});

export const setModalContent = (contentComponent: string) => ({
	type: SET_MODAL_CONTENT,
	payload: contentComponent
});

// Focused event state
// action types
export const FOCUS_EVENT = 'FOCUS_EVENT';
export const UNFOCUS_EVENT = 'UNFOCUS_EVENT';

export const focusEvent = (event: any) => ({
	type: FOCUS_EVENT,
	payload: event
});

export const unfocusEvent = () => ({
	type: UNFOCUS_EVENT
});
