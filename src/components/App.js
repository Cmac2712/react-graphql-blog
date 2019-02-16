import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from  'react-apollo';
import { endpoint } from '../config';
import gql from 'graphql-tag';
import Account from './Account';
import Nav from './Nav';
import Posts from './Posts';
import CreatePost from './CreatePost';
import Reset from './Reset';
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
							<Route exact path={`/account`} component={Account} />
							<Route exact path={`/createpost`} component={CreatePost} />
							<Route path={`/reset`} component={Reset} />
						</Switch>
					</>
				</Router>
			</ApolloProvider>
		);
	}
}


export default App;
