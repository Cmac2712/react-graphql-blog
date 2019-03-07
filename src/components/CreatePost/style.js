import styled from 'styled-components';
import { Form } from '../App/Theme';

const CreatePostForm = styled(Form)`
//	max-width: 700px;

	.editor-wrapper {
		border: 1px red solid;
		border: 1px solid ${props => props.theme.uiColorLight};
		border-radius: 4px;
		margin-bottom: ${props => props.theme.spacingUnit}px;
	}

	.editor {
		min-height: 300px;
		padding-left: ${props => props.theme.spacingUnit}px;
		padding-left: ${props => props.theme.spacingUnit}px;
	}

	.editor-toolbar {
		border: 0;
		border-bottom: 1px solid ${props => props.theme.uiColorLight};
	} 
`; 

export { CreatePostForm };
