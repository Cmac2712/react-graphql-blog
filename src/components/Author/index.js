import React, { Component } from 'react';
import StyledAuthor from './style';
import Avatar from '../Avatar';

const Author = props => (
	<StyledAuthor src={props.avatar}>Post by {props.avatar && <Avatar avatar={props.avatar} /> }
		<strong>{props.screenName || props.name}</strong>
	</StyledAuthor>
);

export default Author;
