import React from 'react';
import './Navbar.scss';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import {
  setModalActive,
  setModalContent,
  unfocusEvent
} from '../../../store/actions';
import { MODAL_CONTENT_REGISTER, MODAL_CONTENT_SIGN_IN } from '../Modal/Modal';
import { User } from '../../../models/User';
import { MainState } from '../../../store/types';

const Navbar: React.FC<DispatchProp & { user: User }> = props => {
  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation">
      <div className="navbar-brand">
        <span role="button" className="navbar-burger burger">
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link
            to="/"
            onClick={() => props.dispatch(unfocusEvent())}
            className="navbar-item back-link"
          >
            <i className="fas fa-angle-left" />
          </Link>
        </div>

        <a className="navbar-item" href="/">
          <img src={logo} alt="LOGO" />
        </a>

        <div className="navbar-end">
          <div className="navbar-item">
            {!props.user && (
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
            )}
            {props.user && (
              <>
                <div className="buttons" style={{ margin: 0 }}>
                  <button
                    className="button is-primary"
                    style={{ margin: '0 5px 0 0' }}
                  >
                    <strong>Create new event</strong>
                  </button>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                  }}
                >
                  <img
                    className="avatar-img"
                    src="http://placekitten.com/60/60"
                    alt="AVATAR"
                  />
                  <p>{props.user.username}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default connect((state: MainState) => ({
  user: state.user
}))(Navbar);
