import { ADD_TODOS } from './actionTypes';

export const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODOS:
			return [...state, action.payload];
		default:
			return state;
	}
};
