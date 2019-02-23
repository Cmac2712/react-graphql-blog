import styled from 'styled-components';


const StyledPosts = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style-type: none;
`;

const StyledPost = styled.li`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	flex-basis: 23%;
	background-color: #fefefe;
	margin: 0;	
	padding: ${props => props.theme.spacingUnitHalf};
	border-radius: 4px;
	padding: ${props => props.theme.spacingUnitHalf};
	${props => props.theme.boxShadow};

	h4 {
		font-size: 25px;
	}

	a {
		color: ${props => props.theme.baseText};
	}
`; 	

export { StyledPosts, StyledPost };
