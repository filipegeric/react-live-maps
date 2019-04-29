import React from 'react';
import './Navbar.scss';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import { setModalActive, setModalContent } from '../../../store/actions';
import { MODAL_CONTENT_REGISTER, MODAL_CONTENT_SIGN_IN } from '../Modal/Modal';

const Navbar: React.FC<DispatchProp> = (props) => {
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
							<button
								onClick={() => {
									props.dispatch(setModalActive(true));
									props.dispatch(setModalContent(MODAL_CONTENT_REGISTER));
								}}
								className="button is-primary"
							>
								<strong>Sign up</strong>
							</button>
							<button
								onClick={() => {
									props.dispatch(setModalActive(true));
									props.dispatch(setModalContent(MODAL_CONTENT_SIGN_IN));
								}}
								className="button is-light"
							>
								Log in
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default connect(null)(Navbar);
