import React from 'react';
import { CountStore } from './providers/countProvider';
import { UserStore } from './providers/userProvider';
function Carlos() {
	const value = React.useContext(CountStore);
	const user = React.useContext(UserStore);
	const { count, m, test } = value.state;
	const { name, age } = user.state.user;
	console.log('rendered Carlos');
	return (
		<div>
			<h1>{m}</h1>
			<h2 onClick={() => user.dispatch({ type: 'append' })}>
				{name} 👈 click this CARLOS
			</h2>
			<h4>{age}</h4>
			<button onClick={() => value.dispatch({ type: 'add' })}>
				{count} 👈 click this
			</button>
			<button onClick={() => value.dispatch({ type: 'test' })}>
				{test} 👈 👇
			</button>
		</div>
	);
}

export default Carlos;
