import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeletePost from '../DeletePost';
import Avatar from '../Avatar';
import { StyledPost, Thumbnail } from './styles';

const Post = ({ post, id, clip }) => (
	<StyledPost key={post.id}>
		<Link to={`/single?postId=${post.id}`}>
			<Thumbnail
			className="thumbnail"
			style={{
				backgroundImage: `url("${post.thumbnail}")`  
			}}/>
			<div className="text">
				<h4>{post.title}</h4>
				<p>{clip(post.content)}</p>
				<p className="author">Post by
					{post.user.avatar && <Avatar avatar={post.user.avatar} /> }
					<strong>{post.user && post.user.screenName || post.user.name}</strong>
				</p>
			</div>
		</Link>
	</StyledPost>
);

export default Post;