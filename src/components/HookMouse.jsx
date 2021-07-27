import React, { useState, useEffect } from 'react';

function HookMouse() {
	const [ x, setX ] = useState();
	const [ y, setY ] = useState();

	const logMouseMove = (e) => {
		console.log('moving mouse');
		setX(e.clientX);
		setY(e.clientY);
	};
	useEffect(() => {
		window.addEventListener('mousemove', logMouseMove);

		return () => {
			window.removeEventListener('mousemove', logMouseMove);
		};
	}, []);
	return (
		<div>
			X - {x} Y - {y}
		</div>
	);
}

export default HookMouse;
