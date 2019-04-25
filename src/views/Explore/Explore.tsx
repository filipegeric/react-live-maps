import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import MainContext from '../../context/MainContext';
import { Query } from 'react-apollo';
import Loading from '../../components/Common/Loading';
import { GET_EVENTS } from '../../graphql/queries';

const Explore: React.FC<RouteComponentProps> = props => {
  const mainContext = useContext(MainContext);
  console.log(Array.from(mainContext.data.checkedInterests));
  return (
    <div>
      <h1>Explore</h1>
      <Query
        query={GET_EVENTS}
        variables={{ ids: Array.from(mainContext.data.checkedInterests) }}
      >
        {({ loading, error, data }: any) => {
          if (loading) return <Loading />;
          if (error) return <div>{'Error! ' + error.message}</div>;

          return <div>{JSON.stringify(data.events)}</div>;
        }}
      </Query>
    </div>
  );
};

export default Explore;
