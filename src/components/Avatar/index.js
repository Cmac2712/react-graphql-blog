import React, { Component } from 'react';
import StyledAvatar from './style';


const Avatar = props => (
	<StyledAvatar className="styled-avatar" src={props.avatar}/>
);

export default Avatar;
