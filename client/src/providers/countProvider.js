import React from 'react';
import countReducer, { initialState } from '../reducers/countReducer';

export const CountStore = React.createContext();

export default function MyCountStore(props) {
	const [state, dispatch] = React.useReducer(countReducer, initialState);
	return (
		<CountStore.Provider value={{ state, dispatch }}>
			{props.children}
		</CountStore.Provider>
	);
}
