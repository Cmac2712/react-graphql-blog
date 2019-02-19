import React, { Component } from 'react';
import gql from 'graphql-tag';
import qs from 'query-string';
import { Query, Mutation } from 'react-apollo';
import User from '../User';
import { Wrapper } from '../App/Theme';

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
	post(where: { id: $id }) {
	  id
	  title
	  content
		user {
			name
		}
	}
  }
`;

class SinglePost extends Component {

	state = {
		id: qs.parse(this.props.location.search).postId
	}

	render() {
		return (
			<Query
				query={SINGLE_POST_QUERY}
				variables={this.state}
			>
				{({data: { post }, loading}) => {

					if (loading) return <p>Loading...</p>;

					console.log(post);

					return (
						<Wrapper>
							<div>
								<h1>{post.title}</h1>
								<p>{post.content}</p>
								<p>{post.user.name}</p>
							</div>
						</Wrapper>
					)
				}}
			</Query>
		)
	}
}

export default SinglePost;
export { SINGLE_POST_QUERY }
