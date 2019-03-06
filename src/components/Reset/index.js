import qs from 'query-string';
import React, { Component } from 'react';
import FloatingLabel from 'floating-label-react'
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User';
import gql from 'graphql-tag';
import Loading from '../Loading';
import User from '../User';
import { Wrapper, Form, FormWrapper, Button, inputStyle } from '../App/Theme';
import ResetForm from './style';
import SuccessMessage from './SuccessMessage';

// TODO: Hide this if the user is logged in

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
	resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
	  id
	  email
	  name
	}
  }
`;

class Reset extends Component {

	state = {
		resetToken: qs.parse(this.props.location.search).resetToken, 
		password: '', 
		confirmPassword: ''
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
    return (
			<User>
			{({data}) => {

				if (data.me) return <SuccessMessage/>

				return (
					<Mutation
						mutation={RESET_MUTATION}
						variables={{
							resetToken: this.state.resetToken,
							password: this.state.password,
							confirmPassword: this.state.confirmPassword,
						}}
						refetchQueries={[{ query: CURRENT_USER_QUERY }]}
					>
						{(reset, { error, loading, called }) => (
							<Wrapper>
								<FormWrapper>
									{ loading && <Loading/> }
									<ResetForm
										method="post"
										disabled={loading}
										onSubmit={async e => {
											e.preventDefault();
											const hasReset = await reset();

											console.log(hasReset);
										}}
									>
										<fieldset disabled={loading} aria-busy={loading}>
											<h2>Reset Your Password</h2>
											{ error && <p>error</p> }
											<FloatingLabel
												id="password"
												type="password"
												name="password"
												placeholder="Password"
												styles={inputStyle}
												value={this.state.password}
												onChange={this.saveToState}
											/>

											<FloatingLabel
												id="confirmPassword"
												type="password"
												name="confirmPassword"
												placeholder="Confirm Password"
												styles={inputStyle}
												value={this.state.confirmPassword}
												onChange={this.saveToState}
											/>

											<Button type="submit">Reset Your Password!</Button>
										</fieldset>
									</ResetForm>
								</FormWrapper>
							</Wrapper>
						)}
					</Mutation>
				)
			}}
			</User>
    )
	}
}

export default Reset;
