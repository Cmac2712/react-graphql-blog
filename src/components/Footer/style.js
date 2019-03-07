import styled from 'styled-components';

const StyledFooter = styled.footer`
	padding: ${props => props.theme.spacingUnit}px;
	background-color: #f1f1f1;
	margin-top: ${props => props.theme.spacingUnit * 4}px;
	font-size: ${props => props.theme.smallFontSize}px;

	.footer-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.github {
		display: flex;
		align-items: center;
		margin-right: auto;
	}

	.github-icon-container {
		font-size: 0;
		height: 18px;
		width: 18px;
	}

	.github span:first-child {
		margin-right: ${props => props.theme.spacingUnit/4}px;
	}

	.myname {
		margin-right: ${props => props.theme.spacingUnit/4}px;
	}

`;

export default StyledFooter;
