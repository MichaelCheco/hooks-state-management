import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyCountStore from './providers/countProvider';
import MyUserStore from './providers/userProvider';

function Container() {
	return (
		<Store>
			<App />
		</Store>
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
