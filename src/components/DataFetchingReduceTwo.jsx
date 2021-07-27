import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
	loading: true,
	error: '',
	post: {}
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return { loading: false, error: '', post: action.payload };
		case 'FETCH_ERROR':
			return { loading: false, error: 'Error Occured', post: {} };
		default:
			return state;
	}
};

function DataFetchingReduceTwo() {
	const [ state, disbatch ] = useReducer(reducer, initialState);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts/4')
			.then((response) => {
				disbatch({ type: 'FETCH_SUCCESS', payload: response.data });
			})
			.catch((error) => {
				disbatch({ type: 'FETCH_ERROR' });
			});
	}, []);
	return (
		<div>
			{state.loading ? 'Loading...' : state.post.title}
			{state.error ? state.error : null}
		</div>
	);
}

export default DataFetchingReduceTwo;
