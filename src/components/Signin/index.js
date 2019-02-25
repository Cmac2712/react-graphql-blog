import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import FloatingLabel from 'floating-label-react'
import User, { CURRENT_USER_QUERY } from '../User';
import Loading from '../Loading';
import Signout from '../Signout';
import Signup from '../Signup';
import gql from 'graphql-tag';
import { Form, FormWrapper,  Button, inputStyle } from '../App/Theme';

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

							if (data && data.me) return <Signout/>

							return (
								<Mutation
									mutation={SIGNIN_MUTATION}
									variables={this.state}
								>
									{
										(signin, {error, loading}) => {

											if (error) return <p>error {error.message}</p>

											refetch();

											return (
												<FormWrapper>
													{ loading && <Loading/> }
													<Form
														onSubmit={async e => {
														e.preventDefault();
														const user = await signin();
														this.setState({ name: "", email: "", password: "" });
													}}
													disabled={loading}
												>
													<fieldset disabled={loading} aria-busy={loading}>
														<h2>Sign In</h2>
														<FloatingLabel
															id="email"
															type="email"
															name="email"
															placeholder="email"
															styles={inputStyle}
															value={this.state.email}
															onChange={this.saveToState}
														/>
														<FloatingLabel
															id="password"
															type="password"
															name="password"
															placeholder="password"
															styles={inputStyle}
															value={this.state.password}
															onChange={this.saveToState}
														/>
														<Button>Sign In</Button>
													</fieldset>
												</Form>
												</FormWrapper>
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
