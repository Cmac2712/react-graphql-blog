import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeletePost from '../DeletePost';
import { fallBackImage } from '../../config.js';
import Author from '../Author';
import Avatar from '../Avatar';


import { StyledPost, Thumbnail } from './style';

const Post = ({ post, id, clip }) => (
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
				<p>{clip(post.content)}</p>
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

export default Post;
