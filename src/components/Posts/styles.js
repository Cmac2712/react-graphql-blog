import styled from 'styled-components';

const StyledPosts = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	list-style-type: none;
	padding: ${props => props.theme.spacingUnit};
	margin: 0;
`;

const StyledPost = styled.li`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	flex-basis: 100%;
	position: relative;
	flex-direction: column;
	background-color: #fefefe;
	margin: 0;	
	margin-bottom: 3%;
	border-radius: 4px;
	${props => props.theme.boxShadow};

	@media (min-width: ${props => props.theme.breakpoints.mobile}px) {
		flex-basis: 48%;
	}

	@media (min-width: ${props => props.theme.breakpoints.laptop}px) {
		flex-basis: 23%;
	}

	h4 {
		font-size: 25px;
	}

	.text {
		padding: ${props => props.theme.spacingUnitHalf};
	}

	a {
		display: flex;
		flex-direction: column;
		color: ${props => props.theme.baseText};
		width: 100%;
	}

	.author {
		margin-top: ${props => props.theme.spacingUnit};
		font-size: ${props => props.theme.smallFontSize}px;
	}

	.author strong {
		font-style: italic;
	}
`; 	

const Thumbnail = styled.div`
	background-size: cover;
  background-position: 50%;
	padding-bottom: 50%;
`;

export { StyledPosts, StyledPost, Thumbnail };
