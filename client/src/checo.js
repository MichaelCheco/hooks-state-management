import React from 'react';
import { CountStore } from './providers/countProvider';
import { UserStore } from './providers/userProvider';
function Checo() {
	const value = React.useContext(CountStore);
	const user = React.useContext(UserStore);
	console.log(value);
	const { count, m } = value.state;
	const { name, age } = user.state.user;
	return (
		<div>
			<h1>{m}</h1>
			<h2 onClick={() => user.dispatch({ type: 'append' })}>
				{name} 👈 click this
			</h2>
			<h4>{age}</h4>
			<button onClick={() => value.dispatch({ type: 'add' })}>
				{count} 👈 click this
			</button>
		</div>
	);
}

export default Checo;
