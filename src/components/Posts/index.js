import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import User from '../User';
import DeletePost from '../DeletePost';
import { Wrapper } from '../App/Theme';
import { StyledPosts, StyledPost } from './styles';

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

	clip = text => {

		return text.split(/\s+/).slice(0,20).join(" ") + "...";
	}

	render() {
		return (
			<Wrapper>
				<StyledPosts>
					<Query
				query={ALL_POSTS_QUERY}
				>
				{
					({data: {posts}, loading, error}) => {

						if (loading) return <p>loading...</p>;

						return posts.map(post => (
							<Post post={post} clip={this.clip} />
						)) 
					}
				}
			</Query>
		</StyledPosts>
			</Wrapper>
		)
	}

}

const Post = ({ post, id, clip }) => (
	<StyledPost key={post.id}>
		<Link to={`/single?postId=${post.id}`}>
			<h4>{post.title}</h4>
			<p>{clip(post.content)}</p>
			<p>{post.user && post.user.name}</p>
		</Link>
		<Link to={`/update?postId=${post.id}`}>Edit</Link>
		<DeletePost id={post.id}/>
	</StyledPost>
)

export default Posts;
export { ALL_POSTS_QUERY }
