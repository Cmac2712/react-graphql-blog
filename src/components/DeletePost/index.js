import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { ALL_POSTS_QUERY } from '../Posts';

const DELETE_POST_MUTATION = gql`
	mutation DELETE_POST_MUTATION($id: ID!) {
		deletePost(id: $id) {
			id
		}
	}

`;

class DeletePost extends Component {

	updatePosts = (cache, payload) => {
		const data = cache.readQuery({ query: ALL_POSTS_QUERY })
		console.log({payload});

    data.posts = data.posts.filter(post => post.id !== payload.data.deletePost.id);

    cache.writeQuery({ query: ALL_POSTS_QUERY, data });
	}
	
	render() {
		return (
			<Mutation
				mutation={DELETE_POST_MUTATION}
				variables={{
					id: this.props.id
				}}
				update={this.updatePosts}
				optimisticResponse={{
					__typename: 'Mutation', 
					deletePost: {
						__typename: 'Post', 
						id: this.props.id
					}
				}}
			>{
				(deletePost) => (
					<a href="#" onClick={e => {
						e.preventDefault();
						deletePost();
					}}>Delete Post</a>
				)
			}
			</Mutation>
		)
	}
}

export default DeletePost;
