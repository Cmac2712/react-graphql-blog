import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from  'react-apollo';
import { endpoint } from '../../config';
import theme, { BaseStyles } from './Theme'
import { ThemeProvider } from 'styled-components';
import gql from 'graphql-tag';
import Nav from '../Nav';
import Posts from '../Posts';
import CreatePost from '../CreatePost';
import UpdatePost from '../UpdatePost';
import SinglePost from '../SinglePost';
import Account from '../Account';
import Reset from '../Reset';
import Cms from '../Cms';
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
					<ThemeProvider theme={theme}>
						<BaseStyles>
							<Nav/>
							<Switch>
								<Route exact path={`/`} component={Posts} />
								<Route exact path={`/cms`} component={Cms} />
								<Route exact path={`/account`} component={Account} />
								<Route path={`/reset`} component={Reset} />
								<Route path={`/update`} component={UpdatePost} />
								<Route path={`/single`} component={SinglePost} />
							</Switch>
						</BaseStyles>
					</ThemeProvider>
				</Router>
			</ApolloProvider>
		);
	}
}


export default App;
