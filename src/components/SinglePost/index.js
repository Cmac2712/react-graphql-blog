import React, { Component } from 'react';
import gql from 'graphql-tag';
import qs from 'query-string';
import { Query } from 'react-apollo';
import { Wrapper } from '../App/Theme';
import { StyledPost } from './style';
import Author from '../Author';
import Loading from '../Loading';

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
	post(where: { id: $id }) {
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

class SinglePost extends Component {

	state = {
		id: qs.parse(this.props.location.search).postId
	}

	render() {
		return (
			<Wrapper
				className="min-height"
			>
			<Query
				query={SINGLE_POST_QUERY}
				variables={this.state}
			>
				{({data: { post }, loading}) => {

					if (loading) return <Loading/>;

					return (
							<StyledPost>
								<h1>{post.title}</h1>
								<div className="post__headImage"
											style={{
												backgroundImage: `url(${post.thumbnail})`
											}}
								>
								</div>
								<div dangerouslySetInnerHTML={{__html: post.content}} />
							
								<Author
									name={post.user.name}
									screenName={post.user.screenName}
									avatar={post.user.avatar}
								/>
							</StyledPost>
					)
				}}
			</Query>
						</Wrapper>
		)
	}
}

export default SinglePost;
export { SINGLE_POST_QUERY }
