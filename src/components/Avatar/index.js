import React, { Component } from 'react';
import StyledAvatar from './style';


const Avatar = props => (
	<StyledAvatar
		className="styled-avatar"
		src={props.avatar}
		width={props.width || '25px'}
		height={props.height || '25px'}
	/>
);

export default Avatar;
