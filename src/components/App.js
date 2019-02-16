import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from  'react-apollo';
import { endpoint } from '../config';
import gql from 'graphql-tag';
import Signin from './Signin';
import Nav from './Nav';
import Posts from './Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const client = new ApolloClient({
	uri: endpoint,
	request: operation => {
		operation.setContext({
			fetchOptions: {
				credentials: 'include'
			}
		})
	}

});

class App extends Component {

	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<>
						<Nav/>
						<Switch>
							<Route exact path={`/`} component={Posts} />
							<Route exact path={`/login`} component={Signin} />
						</Switch>
					</>
				</Router>
			</ApolloProvider>
		);
	}
}


export default App;
