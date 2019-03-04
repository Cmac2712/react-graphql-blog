import styled from 'styled-components';

const SignInStyles = styled.div`

	padding: ${props => props.theme.spacingUnit};

	.forms {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.forms form {
		margin-right: ${props => props.theme.spacingUnit}px;
	}

`;

export { SignInStyles };
