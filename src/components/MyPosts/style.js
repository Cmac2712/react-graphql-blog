import styled from 'styled-components';

const AuthorPostsSection = styled.div`

	h1 {
		margin-bottom: ${props => props.theme.spacingUnit}px;
	}
`;

const AuthorPosts = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;
	min-width: 600px; 

	li {
		display: flex;
		margin-bottom: ${props => props.theme.spacingUnit}px;
		border-bottom: 1px solid #ddd;
	}

	.link--single {
		margin-right: auto;
	}

	span, 
	.link {
		padding: ${props => props.theme.spacingUnit/2}px;
	}

	.link--delete {
		color: ${props => props.theme.warn};
	}
`;

export { AuthorPostsSection, AuthorPosts };
