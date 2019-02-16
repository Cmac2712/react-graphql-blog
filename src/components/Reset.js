import qs from 'query-string';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import gql from 'graphql-tag';

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
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await reset();
              this.setState({ password: '', confirmPassword: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Reset Your Password</h2>
			  { error && <p>error</p> }
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="confirmPassword">
                Confirm Your Password
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.saveToState}
                />
              </label>

              <button type="submit">Reset Your Password!</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
	}
}

export default Reset;
