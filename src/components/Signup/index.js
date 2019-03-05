import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import FloatingLabel from 'floating-label-react'
import gql from 'graphql-tag';
import User, { CURRENT_USER_QUERY } from '../User';
import Loading from '../Loading';
import { Form, FormWrapper, Button, inputStyle } from '../App/Theme';

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
		signup(email: $email, name: $name, password: $password) {
			id
			email
			name
		}
	}
`;

class Signup extends Component {

	state = {
		name: '',
		email: '',
		password: '',
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<User>
			{
				({data, loading, refetch}) => {

					if (loading) return <Loading/>;

					return (
						<Mutation
						mutation={SIGNUP_MUTATION}
						variables={this.state}
						refetchQueries={[{ query: CURRENT_USER_QUERY }]}
						>
						{(signup, { error, loading }) => (
							<FormWrapper>
							{ loading && <Loading/> }
							<Form
							method="post"
							onSubmit={async e => {
								e.preventDefault();
								await signup();
								this.setState({ name: '', email: '', password: '' });
							}}
							disabled={loading}
							aria-busy={loading}
							>
							<fieldset>
							<h2>Sign Up</h2>
							<FloatingLabel
							type="email"
							name="email"
							placeholder="email"
							styles={inputStyle}
							value={this.state.email}
							onChange={this.saveToState}
							/>
							<FloatingLabel
							type="text"
							name="name"
							placeholder="name"
							styles={inputStyle}
							value={this.state.name}
							onChange={this.saveToState}
							/>
							<FloatingLabel
							type="password"
							name="password"
							placeholder="password"
							styles={inputStyle}
							value={this.state.password}
							onChange={this.saveToState}
							/>

							<Button type="submit">Sign Up</Button>
							</fieldset>
							</Form>
							</FormWrapper>
						)}
						</Mutation>
				)


				}
			}
			</User>

		);

	}
}

export default Signup;
export { SIGNUP_MUTATION };
