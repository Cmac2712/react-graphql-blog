import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from  'react-apollo';
import { endpoint, productionEndpoint } from '../../config';
import theme, { GlobalStyle } from './Theme'
import { ThemeProvider } from 'styled-components';
import gql from 'graphql-tag';
import Nav from '../Nav';
import Posts from '../Posts';
import CreatePost from '../CreatePost';
import UpdatePost from '../UpdatePost';
import SinglePost from '../SinglePost';
import MyPosts from '../MyPosts';
import Account from '../Account';
import RequestReset from '../RequestReset';
import Reset from '../Reset';
import Cms from '../Cms';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../Footer';

const client = new ApolloClient({
	uri: process.env.NODE_ENV === 'development' ? endpoint : productionEndpoint,
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
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyle/>
						<Router>
							<>
							<Nav/>
							<Route exact path={`/`} component={Posts} />
							<Route  path={`/cms`} component={Cms} />
							<Route path={`/reset`} component={Reset} />
							<Route path={`/request-reset`} component={RequestReset} />
							<Route path={`/single`} component={SinglePost} />
							</>
						</Router>
						<Footer/>
					</>
				</ThemeProvider>
			</ApolloProvider>
		);
	}
}


export default App;
