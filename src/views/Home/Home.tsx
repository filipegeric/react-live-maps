import React from 'react';
import logo from '../../assets/logo.png';
import './Home.scss';
import InterestCheckbox from '../../components/Common/InterestCheckbox/InterestCheckbox';
import { Query } from 'react-apollo';
import Loading from '../../components/Common/Loading';
import { withRouter, RouteComponentProps } from 'react-router';
import { GET_INTERESTS } from '../../graphql/queries';
import { Link } from 'react-router-dom';

const Home: React.FC<RouteComponentProps> = props => {
  // const { history } = props;
  return (
    <div className="home-view">
      <img src={logo} alt="LOGO" />
      <div>
        <a href="asd">REGISTER</a>&nbsp;
        <a href="asd">LOGIN</a>
      </div>
      <h2>Select your interests</h2>
      <Query query={GET_INTERESTS}>
        {({ loading, error, data }: any) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;

          return <InterestCheckbox interests={data.interests} />;
        }}
      </Query>
      <Link
        to="/explore"
        // onClick={() => {
        //   history.push({
        //     pathname: '/explore',
        //     state: {
        //       foo: 'bar'
        //     }
        //   });
        // }}
        className="button is-primary"
      >
        Let's Go
      </Link>
    </div>
  );
};

export default withRouter(Home);
