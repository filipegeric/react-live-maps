import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Explore from './views/Explore/Explore';
import MainContext, { mainContextInitialState } from './context/MainContext';

const client = new ApolloClient({
  uri: 'http://192.168.0.44:4000/graphql'
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <MainContext.Provider value={mainContextInitialState}>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/explore" exact component={Explore} />
        </BrowserRouter>
      </MainContext.Provider>
    </ApolloProvider>
  );
};

export default App;
