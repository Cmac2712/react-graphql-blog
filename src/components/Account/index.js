import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import User, { CURRENT_USER_QUERY } from '../User';
import Signout from '../Signout';
import Signin from '../Signin';
import Signup from '../Signup';
import RequestReset from '../RequestReset';
import gql from 'graphql-tag';
import { Wrapper } from '../App/Theme';
import { SignInStyles } from './style';

// TODO: Move User query here instead of having one in signup and signin

class Account extends Component {

	render() {
		return (
			<SignInStyles>
				<Wrapper>
					<div className="forms">
						<Signin/>
						<Signup/>
					</div>
					<RequestReset/>
				</Wrapper>
			</SignInStyles>
		)
	}

}

export default Account;
