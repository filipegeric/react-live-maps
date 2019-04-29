import React from 'react';
import './App.css';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import Home from './views/Home/Home';
import Explore from './views/Explore/Explore';
import Navbar from './components/Common/Navbar/Navbar';
import Modal from './components/Common/Modal/Modal';
import { connect } from 'react-redux';

const App: React.FC<RouteComponentProps & { modal: any }> = (props) => {
	return (
		<React.Fragment>
			{props.location && props.location.pathname !== '/' && <Navbar />}
			<main className="has-navbar-fixed-top">
				<Route path="/" exact component={Home} />
				<Route path="/explore" exact component={Explore} />
			</main>
			{/* LoadingOverlay */}
			{/* Modal */}
			<Modal content={props.modal.content} style={{ display: props.modal.isActive ? 'block' : 'none' }} />
		</React.Fragment>
	);
};

export default connect((state: any) => ({
	modal: state.modal
}))(withRouter(App));
