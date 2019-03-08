import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { POSTS_BY_AUTHOR } from '../MyPosts';
import PropTypes from 'prop-types';

const DELETE_POST_MUTATION = gql`
	mutation DELETE_POST_MUTATION($id: ID!) {
		deletePost(id: $id) {
			id
		}
	}

`;

class DeletePost extends Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	updatePosts = (cache, payload) => {
		const data = cache.readQuery({ query: POSTS_BY_AUTHOR })

    data.postsByAuthor = data.postsByAuthor.filter(post => post.id !== payload.data.deletePost.id);

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
					<button
						className={this.props.className}
						onClick={e => {
						e.preventDefault();
						deletePost();
					}}>Delete</button>
				)
			}
			</Mutation>
		)
	}
}

export default DeletePost;
