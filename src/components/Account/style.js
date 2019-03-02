import styled from 'styled-components';
import { FormWrapper } from '../App/Theme'; 

const AccountFormWrapper = styled(FormWrapper)`
	max-width: 500px;
	padding: ${props => props.theme.spacingUnit};
	margin-left: ${props => props.theme.spacingUnit};
`;

export { AccountFormWrapper };