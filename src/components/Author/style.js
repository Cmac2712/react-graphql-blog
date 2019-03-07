import styled from 'styled-components';

const StyledAuthor = styled.p`
	flex-basis: 80%;
	font-size: ${props => props.theme.smallFontSize}px;

	.styled-avatar  {
		flex-basis: 10%;
		margin-bottom: -7px;
		margin-left: 12px;
		margin-right: 6px;
	}

	strong {
		font-style: italic;
	}
`;

export default StyledAuthor;
