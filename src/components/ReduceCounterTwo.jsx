import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value };
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value };
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

function ReduceCounterTwo() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const myStyle = {
		display: 'flex',
		flexDirection: 'column',
		lineHeight: 2,
		margin: '5px',
		alignItems: 'center',
		justifyContent: 'center'
	};
	const myStyle2 = {
		margin: '5px auto',
		padding: '3px 5px'
	};
	const myStyle3 = {
		margin: '5px 10px',
		backgroundColor: 'gray',
		padding: '10px'
	};
	return (
		<div style={myStyle}>
			<div style={myStyle3}>
				Count : {state.firstCounter}
				<div>secondCounter : {state.secondCounter}</div>
			</div>

			<button
				style={myStyle2}
				onClick={() => {
					dispatch({ type: 'increment', value: 1 });
				}}
			>
				Increment
			</button>
			<button
				style={myStyle2}
				onClick={() => {
					dispatch({ type: 'decrement', value: 1 });
				}}
			>
				Decrement
			</button>
			<button
				style={myStyle2}
				onClick={() => {
					dispatch({ type: 'increment2', value: 5 });
				}}
			>
				Increment2
			</button>
			<button
				style={myStyle2}
				onClick={() => {
					dispatch({ type: 'decrement2', value: 5 });
				}}
			>
				Decrement2
			</button>
			<button
				style={myStyle2}
				onClick={() => {
					dispatch({ type: 'reset' });
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default ReduceCounterTwo;
