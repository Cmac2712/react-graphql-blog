import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: ${props => props.theme.spacingUnit}px;
	background-color: #f1f1f1;
	margin-top: ${props => props.theme.spacingUnit * 4}px;
	font-size: ${props => props.theme.smallFontSize}px;

	.footer-container {
		display: flex;
		justify-content: flex-end;
	}
`;

export default StyledFooter;
