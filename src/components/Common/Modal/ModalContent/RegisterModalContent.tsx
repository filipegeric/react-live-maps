import React from 'react';

const RegisterModalContent: React.FC<any> = (props) => {
	return (
		<div className="register-modal-content">
			<h2 className="title is-3">Register</h2>
			<div className="field-body">
				<div className="field">
					<p className="control is-expanded">
						<label className="label">First name</label>
						<input className="input" type="text" />
					</p>
				</div>
				<div className="field">
					<p className="control is-expanded">
						<label className="label">Last name</label>
						<input className="input" type="text" />
					</p>
				</div>
			</div>
			<div className="field">
				<label className="label">Username</label>
				<div className="control">
					<input className="input" type="text" />
				</div>
			</div>

			<div className="field">
				<label className="label">Email</label>
				<div className="control">
					<input className="input" type="email" />
				</div>
			</div>

			<div className="field">
				<label className="label">Password</label>
				<div className="control">
					<input className="input" type="password" />
				</div>
			</div>

			<div className="field">
				<button className="button is-primary is-pulled-right">Register</button>
			</div>
		</div>
	);
};

export default RegisterModalContent;
