import React from 'react';
import logo from '../../assets/logo.png';
import './Home.scss';
import InterestCheckbox from '../../components/Common/InterestCheckbox/InterestCheckbox';
import { Query, QueryResult } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { GET_INTERESTS } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Loading from '../../components/Common/Loading/Loading';
import { connect, DispatchProp } from 'react-redux';
import { setModalActive, setModalContent } from '../../store/actions';
import {
  MODAL_CONTENT_REGISTER,
  MODAL_CONTENT_SIGN_IN
} from '../../components/Common/Modal/Modal';

const Home: React.FC<
  RouteComponentProps & DispatchProp & { user: any }
> = props => {
  return (
    <div className="home-view">
      <img src={logo} alt="LOGO" />
      {!props.user && (
        <div>
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              props.dispatch(setModalActive(true));
              props.dispatch(setModalContent(MODAL_CONTENT_REGISTER));
            }}
          >
            REGISTER
          </span>
          &nbsp;
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              props.dispatch(setModalActive(true));
              props.dispatch(setModalContent(MODAL_CONTENT_SIGN_IN));
            }}
          >
            LOGIN
          </span>
        </div>
      )}
      <h2 className="title is-4">
        Select your interests{props.user ? `, ${props.user.username}` : ''}
      </h2>
      <Query query={GET_INTERESTS}>
        {({ loading, error, data }: QueryResult) => {
          return (
            <React.Fragment>
              {loading && <Loading color="#2da8ee" />}
              {error && <div>Error!</div>}
              <CSSTransition
                in={!loading && !error}
                classNames="fade"
                timeout={300}
              >
                <InterestCheckbox interests={data.interests || []} />
              </CSSTransition>
            </React.Fragment>
          );
        }}
      </Query>
      <Link
        to="/explore"
        className="button is-primary"
        style={{ marginTop: 5 }}
      >
        Let's Go
      </Link>
    </div>
  );
};

export default connect((state: any) => ({
  user: state.user
}))(Home);
