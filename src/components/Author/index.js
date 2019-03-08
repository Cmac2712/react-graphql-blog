import React from 'react';
import StyledAuthor from './style';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';

const Author = props => (
	<StyledAuthor className={props.className} src={props.avatar}>
	Post by
		<strong> {props.screenName || props.name}</strong>
		{props.avatar && <Avatar avatar={props.avatar} /> }
	</StyledAuthor>
);

Author.propTypes = {
	className: PropTypes.string,
	avatar: PropTypes.string.isRequired
}

export default Author;
