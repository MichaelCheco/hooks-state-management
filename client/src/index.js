import React, { useReducer, createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import countReducer, { initialState } from './reducers/countReducer';
import userReducer, { userState } from './reducers/userReducer';
export const CountStore = createContext();
export const UserStore = createContext();

function Container() {
	return (
		<Store>
			<App />
		</Store>
	);
}

function MyUserStore(props) {
	const [state, dispatch] = useReducer(userReducer, userState);
	return (
		<UserStore.Provider value={{ state, dispatch }}>
			{props.children}
		</UserStore.Provider>
	);
}
function MyCountStore(props) {
	const [state, dispatch] = useReducer(countReducer, initialState);
	return (
		<CountStore.Provider value={{ state, dispatch }}>
			{props.children}
		</CountStore.Provider>
	);
}
function Store(props) {
	return (
		<MyUserStore>
			<MyCountStore>{props.children}</MyCountStore>
		</MyUserStore>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Container />, rootElement);
