import styled from 'styled-components';

const AuthorPostsSection = styled.div`
	padding: ${props => props.theme.spacingUnit}px;
	margin-left: ${props => props.theme.spacingUnit};

	h1 {
		margin-bottom: ${props => props.theme.spacingUnit}px;
	}
`;

const AuthorPosts = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;
	min-width: 300px; 

	li {
		padding-bottom: ${props => props.theme.spacingUnit}px;
		margin-bottom: ${props => props.theme.spacingUnit}px;
		border-bottom: 1px solid #ddd;
	}

	.link {
		float: right;
	}
`;

export { AuthorPostsSection, AuthorPosts };
