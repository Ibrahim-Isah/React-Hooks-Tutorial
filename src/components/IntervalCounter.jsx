import React, { useState, useEffect } from 'react';

function IntervalCounter() {
	const [ count, setCount ] = useState(0);

	const tick = () => {
		setCount(count + 1);
		// setCount( prevState => prevState + 1)
	};

	useEffect(
		() => {
			const interval = setInterval(tick, 1000);

			return () => {
				clearInterval(interval);
			};
		},
		[ count ]
	);
	return <div>{count}</div>;
}

export default IntervalCounter;
