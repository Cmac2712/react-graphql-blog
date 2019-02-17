import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import User from './User';

const POSTS_QUERY = gql`
	query POSTS_QUERY {
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
				<User>
					{({data: { me }}) => {

						return (
							<Query
								query={POSTS_QUERY}
							>
								{
									({data: {posts}, loading, error}) => {

										if (loading) return <p>loading...</p>;

										return posts.map(post => (
											<Post post={post} userId={me.id} />
										)) 
									}
								}
							</Query>
						)
					}}
				</User>
			</ul>
		)
	}
}

const Post = ({ post, id }) => (
		<li key={post.id}>
			<h4>{post.title}</h4>
			<p>{post.content}</p>
			<p>{post.user && post.user.name}</p>
			{
				post &&
				post.user &&
				post.user.id === id && <Link to={`/update?postId=${post.id}`}>Edit</Link>
			}
		</li>
	)

export default Posts;
export { POSTS_QUERY }
