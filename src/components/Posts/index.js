import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import User from '../User';
import Post from './Post';
import Loading from '../Loading';
import { Wrapper } from '../App/Theme';
import { StyledPosts, Thumbnail } from './style';

const ALL_POSTS_QUERY = gql`
	query ALL_POSTS_QUERY {
		posts {
			id
			title
			content
			thumbnail
			user {
				name
				screenName
				avatar
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

								if (loading) return <Loading/>

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


export default Posts;
export { ALL_POSTS_QUERY }
