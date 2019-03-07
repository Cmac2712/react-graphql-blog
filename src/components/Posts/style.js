import styled from 'styled-components';

const StyledPosts = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
	margin: 0;
	min-height: 50vh;
`;

const StyledPost = styled.li`
	display: flex;
	align-items: flex-start;
	position: relative;
	margin: 0;	
	margin-bottom: 5%;
	padding-right: ${props => props.theme.spacingUnit/2}px;

	@media (min-width: ${props => props.theme.breakpoints.mobile}px) {
		flex-basis: 50%;
	}

	@media (min-width: ${props => props.theme.breakpoints.laptop}px) {
		flex-basis: 33.333%;
	}
	

	&:nth-child(3n) {
		margin-right: 0;
	}

	h3 {
		line-height: 1;
		margin-bottom: .2rem;
	}

	.text {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	a {
		display: flex;
		//flex-wrap: wrap;
		color: ${props => props.theme.baseText};
		width: 100%;
	}

	.text p {
		flex-basis: 100%;
		margin: 0;
		margin-bottom: ${props => props.theme.spacingUnit/2}px;
		font-size: .8rem;
	}

	.thumbnail {
		height: 125px;
		width: 125px;
		flex-shrink: 0;
		margin-right: ${props => props.theme.spacingUnit}px;
	}

	p.post__author {
		margin-bottom: 0;
		align-self: flex-end;
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
	//padding-bottom: 50%;
`;

export { StyledPosts, StyledPost, Thumbnail };
