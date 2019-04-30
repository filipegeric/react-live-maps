import React, { useState } from 'react';

const SignInModalContent: React.FC<any> = (props) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	return (
		<div className="sign-in-modal-content">
			<form
				onSubmit={(e) => {
					// TODO
					e.preventDefault();
					console.log({ username, password });
				}}
			>
				<h2 className="title is-3">Sign in</h2>
				<div className="field">
					<label className="label">Username</label>
					<div className="control">
						<input onChange={(e) => setUsername(e.target.value)} className="input" type="text" />
					</div>
				</div>

				<div className="field">
					<label className="label">Password</label>
					<div className="control">
						<input onChange={(e) => setPassword(e.target.value)} className="input" type="password" />
					</div>
				</div>

				<div className="field">
					<button className="button is-primary is-pulled-right">Sign in</button>
				</div>
			</form>
		</div>
	);
};

export default SignInModalContent;
