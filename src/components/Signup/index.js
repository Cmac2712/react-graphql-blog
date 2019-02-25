import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import FloatingLabel from 'floating-label-react'
import gql from 'graphql-tag';
import User, { CURRENT_USER_QUERY } from '../User';
import { Form, Button, inputStyle } from '../App/Theme';

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

					if (loading) return <p>Loading...(CURRENT_USER_QUERY)</p>
						
					if (data && data.me) return <p></p>

    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: '', email: '', password: '' });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
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
