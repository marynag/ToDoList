import { ADD_TODOS, UPDATE_STATUS } from './actionTypes';

export const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODOS:
			return [...state, action.payload];
		case UPDATE_STATUS:
			const updatedTodos = state.map((item) => {
				if (item.id === action.payload.id) {
					item.status = !item.status;
				}
				return item;
			});
			return updatedTodos;
		default:
			return state;
	}
};
