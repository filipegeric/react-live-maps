import React from 'react';
import './Explore.scss';
import { RouteComponentProps } from 'react-router';
import { Query, QueryResult } from 'react-apollo';
import { GET_EVENTS } from '../../graphql/queries';
import { connect } from 'react-redux';
import LoadingOverlay from '../../components/Common/Loading/LoadingOverlay';
import EventsList from '../../components/ExploreView/EventsList/EventsList';
import GoogleMap from '../../components/ExploreView/GoogleMap/GoogleMap';
import { CSSTransition } from 'react-transition-group';

const Explore: React.FC<RouteComponentProps & { checkedInterests: Array<any> }> = (props) => {
	return (
		<div className="explore-view columns">
			<Query query={GET_EVENTS} variables={{ ids: props.checkedInterests }}>
				{({ loading, error, data }: QueryResult) => {
					return (
						<React.Fragment>
							<CSSTransition in={loading} classNames="fade" timeout={300} unmountOnExit>
								<LoadingOverlay color="white" backgroundColor="#00000055" />
							</CSSTransition>
							{error && <div>Error! {JSON.stringify(error)}</div>}
							{!error && <EventsList events={data.events || []} />}
							{!error && <GoogleMap events={data.events || []} />}
						</React.Fragment>
					);
				}}
			</Query>
		</div>
	);
};

export default connect((state: any) => ({
	checkedInterests: state.interests
}))(Explore);
