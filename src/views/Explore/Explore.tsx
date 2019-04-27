import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Query, QueryResult } from 'react-apollo';
import { GET_EVENTS } from '../../graphql/queries';
import { connect } from 'react-redux';
import LoadingOverlay from '../../components/Common/Loading/LoadingOverlay';

const Explore: React.FC<RouteComponentProps & { checkedInterests: Array<any> }> = (props) => {
	return (
		<div className="explore-view columns">
			<Query query={GET_EVENTS} variables={{ ids: props.checkedInterests }}>
				{({ loading, error, data, refetch }: QueryResult) => {
					if (loading) return <LoadingOverlay color="white" backgroundColor="#000000f9" />;
					if (error) return <div>{'Error! ' + error.message}</div>;

					return <div>{JSON.stringify(data.events)}</div>;
					// return (
					// 	<EventsList events={data.events} className="column is-5" />
					// 	<GoogleMap events={data.events} className="column is-7" />
					// );
				}}
			</Query>
		</div>
	);
};

export default connect((state: any) => ({
	checkedInterests: state.interests
}))(Explore);
