import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Explore from './views/Explore/Explore';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import Navbar from './components/Common/Navbar/Navbar';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

const store = createStore(reducers);

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<BrowserRouter>
					{/* I don't know how to render navbar conditionaly based on current route */}
					{/* Providers and router should be extracted to Root component */}
					<Navbar />
					<main className={'has-navbar-fixed-top'}>
						<Route path="/" exact component={Home} />
						<Route path="/explore" exact component={Explore} />
					</main>
					{/* LoadingOverlay */}
					{/* Modal */}
				</BrowserRouter>
			</Provider>
		</ApolloProvider>
	);
};

export default App;
