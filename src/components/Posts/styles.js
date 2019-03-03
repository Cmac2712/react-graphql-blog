import styled from 'styled-components';

const StyledPosts = styled.ul`
	display: flex;
	flex-wrap: wrap;
//	justify-content: space-between;
	list-style-type: none;
	padding: ${props => props.theme.spacingUnit};
	margin: 0;
`;

const StyledPost = styled.li`
	display: flex;
	align-items: flex-start;
	flex-basis: 100%;
	position: relative;
	margin: 0;	
	margin-bottom: 2%;

	@media (min-width: ${props => props.theme.breakpoints.mobile}px) {
		flex-basis: 48%;
	}

	@media (min-width: ${props => props.theme.breakpoints.laptop}px) {
		flex-basis: 23%;
		margin-right: 2%;
	}

	&:nth-child(4) {
		margin-right: 0;
	}

	h4 {
		font-size: 25px;
		margin-bottom: 0;
	}

	.text {
		display: flex;
		flex-wrap: wrap;
		padding-top: ${props => props.theme.spacingUnitHalf};
	}

	a {
		display: flex;
		flex-wrap: wrap;
		color: ${props => props.theme.baseText};
		width: 100%;
	}

	.text p {
		flex-basis: 100%;
	}

	.thumbnail {
		flex-basis: 100%;
	}

	.author {
		flex-basis: 80%;
		//margin-top: ${props => props.theme.spacingUnit};
		font-size: ${props => props.theme.smallFontSize}px;
	}

	.author strong {
		font-style: italic;
	}

	.styled-avatar  {
		flex-basis: 10%;
		margin-bottom: -7px;
		margin-left: 12px;
		margin-right: 6px;
	}
`; 	

const Thumbnail = styled.div`
	background-size: cover;
  background-position: 50%;
	padding-bottom: 50%;
`;

export { StyledPosts, StyledPost, Thumbnail };
