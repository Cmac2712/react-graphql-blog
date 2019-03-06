import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import User, { CURRENT_USER_QUERY } from '../User';
import Signout from '../Signout';
import Signin from '../Signin';
import Signup from '../Signup';
import Loading from '../Loading';
import RequestReset from '../RequestReset';
import gql from 'graphql-tag';
import { Wrapper } from '../App/Theme';
import { SignInStyles } from './style';

// TODO: Move User query here instead of having one in signup and signin
// TODO: Use User comp

class Portal extends Component {

	render() {
		return (
  		<Query query={CURRENT_USER_QUERY}>
			{({ data, loading }) => {
				if (loading) return <Loading/>;
				if (!data.me) {
					return (
						<SignInStyles>
							<Wrapper>
								<div className="forms">
									<Signin/>
									<Signup/>
								</div>
							</Wrapper>
						</SignInStyles>
					);
				}
				return this.props.children;
			}}
  		</Query>
		)
	}

}

export default Portal;
