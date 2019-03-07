import React, { Component } from 'react';
import StyledAuthor from './style';
import Avatar from '../Avatar';

const Author = props => (
	<StyledAuthor className={props.className} src={props.avatar}>
	Post by
		<strong> {props.screenName || props.name}</strong>
		{props.avatar && <Avatar avatar={props.avatar} /> }
	</StyledAuthor>
);

export default Author;
