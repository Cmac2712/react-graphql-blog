import styled from 'styled-components'; 
import { Form } from '../App/Theme';

const ResetForm = styled(Form)`
	position: relative;
	max-width: 500px;
	margin: 0 auto;
`;

const StyledSuccessMessage = styled.p`
	margin: ${props => props.theme.spacingUnit * 4}px auto ${props => props.theme.spacingUnit * 6}px auto;
	font-family: ${props => props.theme.headerFont};
	font-size: 1.25rem;
	font-weight: bold;
	text-align: center;
`;

export default ResetForm;
export { StyledSuccessMessage };
