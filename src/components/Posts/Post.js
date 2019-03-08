import React from 'react';
import { Link } from 'react-router-dom';
import { fallBackImage } from '../../config.js';
import Author from '../Author';
import { stripHTML } from '../../utils';


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

export default Post;
