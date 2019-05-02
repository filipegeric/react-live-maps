import React, { useState } from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import { LOGIN } from '../../../../graphql/mutations';
import { connect, DispatchProp } from 'react-redux';
import {
  setModalActive,
  setModalContent,
  setUser
} from '../../../../store/actions';
import { User } from '../../../../models/User';

const SignInModalContent: React.FC<DispatchProp> = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogInFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    login: MutationFn<
      { login: { ok: boolean; token: string } },
      { username: string; password: string }
    >
  ) => {
    e.preventDefault();
    const result = await login({ variables: { username, password } });
    if (result && result.data) {
      const { ok, token } = result.data.login;
      if (ok) {
        localStorage.setItem('token', token);
        props.dispatch(setModalActive(false));
        props.dispatch(setModalContent(''));
        // TODO: set user in redux
        props.dispatch(setUser({ username } as User));
      }
    }
  };
  return (
    <Mutation<
      { login: { ok: boolean; token: string } },
      { username: string; password: string }
    >
      mutation={LOGIN}
    >
      {(login, { error, loading }) => (
        <div className="sign-in-modal-content">
          <form onSubmit={e => handleLogInFormSubmit(e, login)}>
            <h2 className="title is-3">Sign in</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  onChange={e => setUsername(e.target.value)}
                  className="input"
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  onChange={e => setPassword(e.target.value)}
                  className="input"
                  type="password"
                />
              </div>
            </div>

            <div className="field">
              {error && (
                <span style={{ color: 'red' }}>
                  Error! {error.graphQLErrors[0].message}!
                </span>
              )}
              <button
                className={`button is-primary is-pulled-right ${
                  loading ? 'is-loading' : ''
                }`}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default connect(null)(SignInModalContent);
