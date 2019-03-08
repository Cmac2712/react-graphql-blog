import React from 'react';
import StyledAvatar from './style';
import PropTypes from 'prop-types';


const Avatar = props => (
	<StyledAvatar
		onClick={props.onClick}
		className={`styled-avatar ${props.className}`}
		src={props.avatar || "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
		width={props.width || '25px'}
		height={props.height || '25px'}
	/>
);

Avatar.propTypes = {
	onClick: PropTypes.func, 
	className: PropTypes.string, 
	src: PropTypes.string, 
	width: PropTypes.string, 
	height: PropTypes.string
}

export default Avatar;
