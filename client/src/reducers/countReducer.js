export default function countReducer(state, action) {
	switch (action.type) {
		case 'add': {
			return {
				...state,
				count: state.count + 1,
			};
		}
		default:
			throw new Error(`Unsupported action type ${action.type}`);
	}
}
export const initialState = {
	count: 1,
	m: 'michael',
};
