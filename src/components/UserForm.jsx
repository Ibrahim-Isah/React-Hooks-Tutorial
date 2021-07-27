import React, { useState } from 'react';

const UserForm = () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="firstname">FirstName</label>
					<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
				</div>
				<div>
					<label htmlFor="lastname">LastName</label>
					<input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default UserForm;
