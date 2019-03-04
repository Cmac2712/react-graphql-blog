import styled from 'styled-components';

const StyledAuthor = styled.p`
	flex-basis: 80%;
	font-size: ${props => props.theme.smallFontSize}px;

	strong {
		font-style: italic;
	}
`;

export default StyledAuthor;
