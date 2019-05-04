import React, { useEffect } from 'react';
import './App.css';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import Home from './views/Home/Home';
import Explore from './views/Explore/Explore';
import Navbar from './components/Common/Navbar/Navbar';
import Modal from './components/Common/Modal/Modal';
import { connect, DispatchProp } from 'react-redux';
import { MainState, ModalState } from './store/types';
import { withApollo, WithApolloClient } from 'react-apollo';
import { ME } from './graphql/queries';
import { User } from './models/User';
import { setUser } from './store/actions';

const App: React.FC<
  WithApolloClient<RouteComponentProps & { modal: ModalState } & DispatchProp>
> = ({ client, dispatch, location, modal }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      client
        .query<{ me: User }>({ query: ME })
        .then(res => dispatch(setUser(res.data.me)))
        .catch(console.log);
    }
  }, [dispatch, client]);
  return (
    <React.Fragment>
      {location && location.pathname !== '/' && <Navbar />}
      <main className="has-navbar-fixed-top">
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Explore} />
      </main>
      {/* LoadingOverlay */}
      <Modal
        content={modal.content}
        style={{ display: modal.isActive ? 'block' : 'none' }}
      />
    </React.Fragment>
  );
};

export default connect((state: MainState) => ({
  modal: state.modal
}))(withRouter(withApollo(App)));
