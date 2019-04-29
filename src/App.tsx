import React from 'react';
import './App.css';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import Home from './views/Home/Home';
import Explore from './views/Explore/Explore';
import Navbar from './components/Common/Navbar/Navbar';

const App: React.FC<RouteComponentProps> = (props) => {
	return (
		<React.Fragment>
			{props.location && props.location.pathname !== '/' && <Navbar />}
			<main className={'has-navbar-fixed-top'}>
				<Route path="/" exact component={Home} />
				<Route path="/explore" exact component={Explore} />
			</main>
			{/* LoadingOverlay */}
			{/* Modal */}
		</React.Fragment>
	);
};

export default withRouter(App);
