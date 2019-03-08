import React from 'react';
import StyledAvatar from './style';


const Avatar = props => (
	<StyledAvatar
		onClick={props.onClick}
		className={`styled-avatar ${props.className}`}
		src={props.avatar || "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
		width={props.width || '25px'}
		height={props.height || '25px'}
	/>
);

export default Avatar;
