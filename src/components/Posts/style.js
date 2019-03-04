import styled from 'styled-components';

const StyledPosts = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: ${props => props.theme.spacingUnit}px;
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
		flex-basis: 28%;
		margin-right: 5%;
	}

	&:nth-child(3) {
		margin-right: 0;
	}

	h4 {
		font-size: 25px;
		margin-bottom: 0;
	}

	.text {
		display: flex;
		flex-wrap: wrap;
		padding-top: ${props => (props.theme.spacingUnit/2)}px;
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
