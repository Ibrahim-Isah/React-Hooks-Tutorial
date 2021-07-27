import React, { useState, useEffect, useRef } from 'react';

function RefTimer() {
	const [ timer, setTimer ] = useState(0);
	const intervalRef = useRef();
	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTimer((prevTimer) => prevTimer + 1);
		}, 1000);
		return () => {
			clearInterval(intervalRef.currrent);
		};
	}, []);
	return (
		<div>
			Hook Timer - {timer}
			<button onClick={() => clearInterval(intervalRef.current)}>clear timer</button>
		</div>
	);
}

export default RefTimer;
