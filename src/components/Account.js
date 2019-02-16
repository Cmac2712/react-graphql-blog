import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import User, { CURRENT_USER_QUERY } from './User';
import Signout from './Signout';
import Signin from './Signin';
import Signup from './Signup';
import RequestReset from './RequestReset';
import gql from 'graphql-tag';

// TODO: Move User query here instead of having one in signup and signin

class Account extends Component {

	render() {
		return (
			<>
				<Signin/>
				<Signup/>
				<RequestReset/>
			</>
		)
	}

}

export default Account;
