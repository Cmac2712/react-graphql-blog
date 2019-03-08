import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import FloatingLabel from 'floating-label-react';
import { Link } from 'react-router-dom';
import { CURRENT_USER_QUERY } from '../User';
import Loading from '../Loading';
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
		password: '',
		_loading: false
	}

	saveToState = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render() {

		return (
			<Mutation
				mutation={SIGNIN_MUTATION}
				variables={this.state}
				refetchQueries={[{
					query: CURRENT_USER_QUERY
				}]}
			>
			{
				(signin, {error, loading}) => {

					if (error) return <p>error {error.message}</p>

						return (
							<FormWrapper>
							{ (this.state._loading) && <Loading/> }
							<Form
							onSubmit={async e => {
								e.preventDefault();

								this.setState({
									_loading: true
								});

								await signin();
								this.setState({
									name: "",
									email: "",
									password: ""
								});
							}}
							disabled={this.state._loading}
							aria-busy={this.state._loading}
							>
							<fieldset>
							<h2>Sign In</h2>
							<FloatingLabel
							id="signin-email"
							type="email"
							name="email"
							placeholder="email"
							styles={inputStyle}
							value={this.state.email}
							onChange={this.saveToState}
							/>
							<FloatingLabel
							id="signin-password"
							type="password"
							name="password"
							placeholder="password"
							styles={inputStyle}
							value={this.state.password}
							onChange={this.saveToState}
							/>
							<Link
							className="link request-reset-link"
							to={`/request-reset`}
							>
							Forgotton Password?
							</Link>
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

export default Signin;
