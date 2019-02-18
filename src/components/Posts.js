import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import User from './User';
import DeletePost from './DeletePost';

const ALL_POSTS_QUERY = gql`
	query ALL_POSTS_QUERY {
		posts {
			id
			title
			content
			user {
				name
			}
		}
	}
`;

class Posts extends Component {

	render() {
		return (
			<ul>
				<Query
			query={ALL_POSTS_QUERY}
			>
			{
				({data: {posts}, loading, error}) => {

					if (loading) return <p>loading...</p>;

					return posts.map(post => (
						<Post post={post} />
					)) 
				}
			}
		</Query>
	</ul>
		)
	}

}

const Post = ({ post, id }) => (
	<li key={post.id}>
		<h4>{post.title}</h4>
		<p>{post.content}</p>
		<p>{post.user && post.user.name}</p>
		<Link to={`/update?postId=${post.id}`}>Edit</Link>
		<DeletePost id={post.id}/>
	</li>
)

export default Posts;
export { ALL_POSTS_QUERY }
