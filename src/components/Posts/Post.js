import React from 'react';
import { Link } from 'react-router-dom';
import { fallBackImage } from '../../config.js';
import Author from '../Author';
import { stripHTML } from '../../utils';
import PropTypes from 'prop-types';
import { StyledPost, Thumbnail } from './style';

const Post = ({ post, id, clip }) => { 

	const content = clip( stripHTML(post.content) );	

	return (
		<StyledPost key={post.id}>
			<Link to={`/single?postId=${post.id}`}>
			<Thumbnail
				className="thumbnail"
				style={{
					backgroundImage: `url("${post.thumbnail || fallBackImage}")`  
				}}
				/>
				<div className="text">
					<h3>{post.title}</h3>
					<p>{content}</p>
					<Author
						className="post__author"
						name={post.user.name}
						screenName={post.user.screenName}
						avatar={post.user.avatar}
					/>
				</div>
			</Link>
		</StyledPost>
	);

};

Post.propTypes = {
	thumbnail: PropTypes.string, 
	post: PropTypes.shape({
		id: PropTypes.string.isRequired, 
		user: PropTypes.shape({
			name: PropTypes.string.isRequired, 
			screenName: PropTypes.string, 
			avatar: PropTypes.string
		})
	}), 
	clip: PropTypes.func.isRequired
}

export default Post;
