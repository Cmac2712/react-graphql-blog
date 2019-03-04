import styled from 'styled-components';

const StyledPost = styled.div`
	max-width: 750px;
	margin: 0 auto;

	.post__headImage {
		background-size: cover;
		background-position: 50%;
		width: 100%;
		padding-bottom: 33%;
		margin-bottom: ${props => props.theme.spacingUnit}px;
	}
`;

export { StyledPost };
