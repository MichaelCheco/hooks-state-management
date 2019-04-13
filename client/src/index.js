import React, { useReducer, createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export const CountStore = createContext();
export const UserStore = createContext();
function countReducer(state, action) {
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
function userReducer(state, action) {
	switch (action.type) {
		case 'append': {
			return {
				...state,
				user: {
					...state.user,
					name: state.user.name + 'W',
				},
			};
		}
		default:
			throw new Error(`Unsupported action type ${action.type}`);
	}
}
function Container() {
	return (
		<Store>
			<App />
		</Store>
	);
}

function MyUserStore(props) {
	const [state, dispatch] = useReducer(userReducer, {
		user: { name: 'michael', age: 21 },
	});
	return (
		<UserStore.Provider value={{ state, dispatch }}>
			{props.children}
		</UserStore.Provider>
	);
}
function MyCountStore(props) {
	const [state, dispatch] = useReducer(countReducer, {
		count: 1,
		m: 'michael',
	});
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
