import React, { useState, useEffect } from 'react';

function EffectCounterOne() {
	const [ count, setCount ] = useState(0);
	const [ name, setName ] = useState('');

	useEffect(
		() => {
			console.log(`Updating Effect`);
			document.title = `Clicked ${count} Times`;
		},
		[ count ]
	);
	return (
		<div>
			<input type="text" value={name.value} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>Count : {count}</button>
		</div>
	);
}

export default EffectCounterOne;
