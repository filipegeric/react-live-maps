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

const Home: React.FC<RouteComponentProps> = (props: any) => {
	return (
		<div className="home-view">
			<img src={logo} alt="LOGO" />
			<div>
				<a href="asd">REGISTER</a>&nbsp;
				<a href="asd">LOGIN</a>
			</div>
			<h2>Select your interests</h2>
			<Query query={GET_INTERESTS}>
				{({ loading, error, data }: QueryResult) => {
					return (
						<React.Fragment>
							{loading && <Loading color="#2da8ee" />}
							{error && <div>Error!</div>}
							<CSSTransition in={!loading && !error} classNames="fade" timeout={300}>
								<InterestCheckbox interests={data.interests || []} />
							</CSSTransition>
						</React.Fragment>
					);
				}}
			</Query>
			<Link to="/explore" className="button is-primary">
				Let's Go
			</Link>
		</div>
	);
};

export default Home;
