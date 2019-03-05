import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
//import { ALL_POSTS_QUERY } from '../Posts';
import { POSTS_BY_AUTHOR } from '../MyPosts';

const DELETE_POST_MUTATION = gql`
	mutation DELETE_POST_MUTATION($id: ID!) {
		deletePost(id: $id) {
			id
		}
	}

`;

class DeletePost extends Component {

	updatePosts = (cache, payload) => {
		const data = cache.readQuery({ query: POSTS_BY_AUTHOR })
		console.log({payload}, {data});

    data.postsByAuthor = data.postsByAuthor.filter(post => post.id !== payload.data.deletePost.id);
		return;

    cache.writeQuery({ query: POSTS_BY_AUTHOR, data });
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
						id: this.props.id, 
						__typename: 'Post'
					}
				}}
			>{
				(deletePost) => (
					<a href="#"
						className={this.props.className}
						onClick={e => {
						e.preventDefault();
						deletePost();
					}}>Delete</a>
				)
			}
			</Mutation>
		)
	}
}

export default DeletePost;
