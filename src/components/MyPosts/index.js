import React, { Component } from 'react';
import DeletePost from '../DeletePost';
import Loading from '../Loading';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { AuthorPosts, AuthorPostsSection } from './style';

const POSTS_BY_AUTHOR = gql`
	query POSTS_BY_AUTHOR {
		postsByAuthor {
			id
			title
		}	
	}
`;

class MyPosts extends Component {

	render() {
		return (
			<>
			<AuthorPostsSection
				className="cms-section"
			>
			<h1>Your Posts</h1>
			<Query
			query={POSTS_BY_AUTHOR}
			>
			{
				({data: {postsByAuthor}, loading, error}) => {

					if (loading) return <Loading/>;

					if (!postsByAuthor.length) return <p>No posts yet :(</p>

					return (
						<AuthorPosts>
						{ postsByAuthor.map(post => (
										<li key={post.id}>
											<Link
												className="link link--single"
												to={`/single?postId=${post.id}`}>
												{post.title}
											</Link>
											<DeletePost
												className="link link--delete"
												id={post.id}
											/>
											<Link
												className="link"
												to={`/cms/update-post?postId=${post.id}`}>Edit
											</Link>
										</li>
									)) }
								</AuthorPosts>
							);
						}
					}
				</Query>
				</AuthorPostsSection>
			</>
		)
	}

}

export default MyPosts;
export { POSTS_BY_AUTHOR };
