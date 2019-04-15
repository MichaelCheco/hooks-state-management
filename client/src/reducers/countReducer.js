export default function countReducer(state, action) {
	switch (action.type) {
		case 'add': {
			return {
				...state,
				count: state.count + 1,
			};
		}
		case 'test': {
			return {
				...state,
				test: state.test + 'A',
			};
		}
		default:
			throw new Error(`Unsupported action type ${action.type}`);
	}
}
export const initialState = {
	count: 1,
	test: 'test',
	m: 'michael',
};
