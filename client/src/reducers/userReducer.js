export default function userReducer(state, action) {
	switch (action.type) {
		case 'append': {
			return {
				...state,
				user: {
					...state.user,
					name: state.user.name + ` is cool`,
				},
			};
		}
		default:
			throw new Error(`Unsupported action type ${action.type}`);
	}
}

export const userState = {
	user: { name: 'dylan', age: 27 },
};
