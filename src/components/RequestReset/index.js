import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import FloatingLabel from 'floating-label-react'
import Loading from '../Loading';
import { Wrapper, Form, FormWrapper, Button, inputStyle } from '../App/Theme';
import RequestResetForm from './style';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {

  state = {
    email: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
		<Mutation
			mutation={REQUEST_RESET_MUTATION}
			variables={this.state}
		>
			{(reset, { error, loading, called }) => {

				return (
					<Wrapper>
						<FormWrapper>
							{ loading && <Loading/> }
							<RequestResetForm
								method="post"
								data-test="form"
								disabled={loading}
								onSubmit={async e => {
									e.preventDefault();
									await reset();
									this.setState({ email: '' });
								}}
							>
								<fieldset disabled={loading} aria-busy={loading}>
									<h2>Request a password reset</h2>
									{error && <p>error</p>}
									{!error && !loading && called && <p className="success">Success! Check your email for a reset link!</p>}
									<FloatingLabel
										id="email"
										type="email"
										name="email"
										placeholder="email"
										styles={inputStyle}
										value={this.state.email}
										onChange={this.saveToState}
									/>

									<Button type="submit">Request Reset!</Button>
								</fieldset>
							</RequestResetForm>
						</FormWrapper>
					</Wrapper>
        )
			}
					
					}
      </Mutation>
    );
  }
}

export default RequestReset;
export { REQUEST_RESET_MUTATION };
