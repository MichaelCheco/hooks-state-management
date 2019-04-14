import React, {useContext} from 'react';
import { CountStore } from './providers/countProvider';
import { UserStore } from './providers/userProvider';
function Checo() {
	const value = useContext(CountStore);
	const user = useContext(UserStore);
	const { count, m } = value.state; // count and m are destructured 
																		//(value.state.count, value.state.m)  
																		// value = Context(CountStore)
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
