import React from 'react';
import './Navbar.scss';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = (props) => {
	return (
		<nav className="navbar is-transparent is-fixed-top" role="navigation">
			<div className="navbar-brand">
				<a role="button" className="navbar-burger burger">
					<span />
					<span />
					<span />
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<Link to="/" className="navbar-item" style={{ color: 'blue', fontSize: '40px' }}>
						&lt;
					</Link>
				</div>

				<a className="navbar-item" href="/">
					<img src={logo} alt="LOGO" />
				</a>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-primary">
								<strong>Sign up</strong>
							</a>
							<a className="button is-light">Log in</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
