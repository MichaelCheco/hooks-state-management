import React, { useReducer, createContext } from 'react';
import userReducer, { userState } from '../reducers/userReducer';

export const UserStore = createContext();

export default function MyUserStore(props) {
	const [state, dispatch] = useReducer(userReducer, userState);
	return (
		<UserStore.Provider value={{ state, dispatch }}>
			{props.children}
		</UserStore.Provider>
	);
}
