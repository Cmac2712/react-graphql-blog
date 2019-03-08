import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button } from '../App/Theme';
import { CURRENT_USER_QUERY } from '../User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => (
	<Mutation
		mutation={SIGN_OUT_MUTATION}
		refetchQueries={[{ query: CURRENT_USER_QUERY }]}
	>
    {signout => <Button onClick={signout}>Sign Out</Button>}
  </Mutation>
);
export default Signout;
