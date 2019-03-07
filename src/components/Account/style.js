import styled from 'styled-components';
import { FormWrapper } from '../App/Theme'; 

const AccountFormWrapper = styled(FormWrapper)`

	.avatar-wrapper {
		position: relative;
		display: inline-block;
		font-size: 0;
		cursor: pointer;
		background-color: #ddd;
		border-radius: 50%;
	}

	.avatar-wrapper:after, 
	.avatar-wrapper:before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		border-radius: 50%;
		pointer-events: none;
	}

	.avatar-wrapper:before {
		background-color: ${props => props.theme.uiColorLight};
		height: 50px;
		width: 50px;
		margin: auto;
		background-image: url(/images/UploadIcon.svg);
		background-size: 25px;
		background-repeat: no-repeat;
		background-position: 50%;
		opacity: .9;
	}

	.avatar-wrapper.image-uploading:before {
		display: none;
	}

	.avatar-wrapper.image-uploading:after {
		background-image: url(/images/LoadingIcon.svg);
		background-size: 50px;
		background-repeat: no-repeat;
		background-position: 50%;
	}

	.avatar-wrapper.image-uploading .styled-avatar {
		opacity: .2;
	}

	[for="screen-name"] {
		display: block;
	}
	
`;

export { AccountFormWrapper };
