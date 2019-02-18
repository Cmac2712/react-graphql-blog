import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import User, { CURRENT_USER_QUERY } from '../User';
import Signout from '../Signout';
import Signup from '../Signup';
import gql from 'graphql-tag';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
	signin(email: $email, password: $password) {
	  id
	  email
	  name
	}
  }
`;

class Signin extends Component {
	state = {
		name: '', 
		email: '', 
		password: ''
	}

	saveToState = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render() {
		return (
			<User>
				{
					({data, loading, refetch}) => {

						if (loading) return <p>Loading...(CURRENT_USER_QUERY)</p>

							if (data && data.me) return <Signout/>

							return (
								<Mutation
									mutation={SIGNIN_MUTATION}
									variables={this.state}
								>
									{
										(signin, {error, loading}) => {

											if (error) return <p>error {error.message}</p>

												if (loading) return <p>Loading...(SIGNIN_MUTATION)</p>

												refetch();

											return (
												<form onSubmit={async e => {
													e.preventDefault();
													const user = await signin();
													console.log(user);
													this.setState({ name: "", email: "", password: "" });
												}}
											>
												<fieldset disabled={loading} aria-busy={loading}>
													<h2>Sign In</h2>
													<label htmlFor="email">Email</label>
													<input
														id="email"
														type="email"
														name="email"
														value={this.state.email}
														onChange={this.saveToState}
													/>
													<label htmlFor="password">Password</label>
													<input
														id="password"
														type="password"
														name="password"
														value={this.state.password}
														onChange={this.saveToState}
													/>
													<button>Sign In</button>
												</fieldset>
											</form>
											);
										}
									}
								</Mutation>
							)
					}
				}
			</User>

		);
	}
}

export default Signin;
