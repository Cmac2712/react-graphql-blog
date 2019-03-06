import styled from 'styled-components'; 
import { Form } from '../App/Theme';

const RequestResetForm = styled(Form)`
	position: relative;
	max-width: 500px;
	margin: 0 auto;

	.success {
		color: ${props => props.theme.success};
		font-weight: bold;
	}
`;

export default RequestResetForm;
