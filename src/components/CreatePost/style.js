import styled from 'styled-components';
import { Form } from '../App/Theme';

const CreatePostForm = styled(Form)`
	display: block;
	max-width: 800px;
	margin: 0 auto;
	margin-top: ${props => props.theme.spacingUnit}px;

	input, 
	textarea {
		width: 100%;
		margin-bottom: ${props => props.theme.spacingUnit}px;
	}

	button {
		float: right;
	}
`; 

export { CreatePostForm };
