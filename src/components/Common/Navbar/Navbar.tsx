import React from 'react';
import './Navbar.scss';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = (props) => {
	return (
		<nav className="navbar is-transparent is-fixed-top" role="navigation">
			<div className="navbar-brand">
				<span role="button" className="navbar-burger burger">
					<span />
					<span />
					<span />
				</span>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<Link to="/" className="navbar-item" style={{ color: '#2da8ee', fontSize: '40px' }}>
						<i className="fas fa-angle-left" />
					</Link>
				</div>

				<a className="navbar-item" href="/">
					<img src={logo} alt="LOGO" />
				</a>

				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<button className="button is-primary">
								<strong>Sign up</strong>
							</button>
							<button className="button is-light">Log in</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
