import styled from 'styled-components';

const StyledPosts = styled.ul`
	list-style-type: none;
`;

const StyledPost = styled.li`
	background-color: #fefefe;
	margin: 0;	
	padding: ${props => props.theme.spacingUnitHalf};
	border-radius: 4px;
	display: inline-block;
	box-shadow: 2px 3px 0 rgba(0, 0, 0, .1);

	h4 {
		font-size: 25px;
	}
`; 	

export { StyledPosts, StyledPost };
