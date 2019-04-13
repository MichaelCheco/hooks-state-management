import React from 'react';
import userReducer, { userState } from '../reducers/userReducer';

export const UserStore = React.createContext();

export default function MyUserStore(props) {
	const [state, dispatch] = React.useReducer(userReducer, userState);
	return (
		<UserStore.Provider value={{ state, dispatch }}>
			{props.children}
		</UserStore.Provider>
	);
}
