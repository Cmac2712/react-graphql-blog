import styled from 'styled-components';

const StyledPosts = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
	margin: 0;
	min-height: 300px;
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
		margin-bottom: 2%;
		flex-basis: 33.333%;
	}

	&:nth-child(3n) {
		margin-right: 0;
	}

	h3 {
		line-height: 1;
		margin-bottom: .2rem;
	}

	a {
		display: flex;
		//flex-wrap: wrap;
		color: ${props => props.theme.baseText};
		width: 100%;
	}

	.text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.text p {
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
		line-height: 1;
		margin-top: auto;
		margin-bottom: 0;
		flex: 0 1 auto;
	}

`; 	

const Thumbnail = styled.div`
	background-size: cover;
  background-position: 50%;
	//padding-bottom: 50%;
`;

export { StyledPosts, StyledPost, Thumbnail };
