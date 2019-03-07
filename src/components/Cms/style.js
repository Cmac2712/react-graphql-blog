import styled from 'styled-components';

const CmsPage = styled.div`
	display: flex;

	.cms-section {
		position: relative;
		margin-left: ${props => props.theme.spacingUnit}px;
		margin-right: ${props => props.theme.spacingUnit}px;
	}

	h1 {
		line-height: 1.5rem;
		margin-bottom: ${props => props.theme.spacingUnit}px;
	}

`;

const StyledSidebar = styled.nav`
	display: flex;	
	flex-direction: column;
	height: 100%;
	max-width: 15vw;
	width: 100%;
	padding: ${props => props.theme.spacingUnit}px 0;
	padding-top: 0;
	border-right: 1px solid #ddd;
	position: relative;
	z-index: 999;

	a {
		padding: ${props => (props.theme.spacingUnit/2)}px;
		border-bottom: 1px solid #ddd;
	}

	a:first-child {
		border-top: 1px solid #ddd;
	}

	button {
		margin-top: ${props => (props.theme.spacingUnit/2)}px;
	}

`;


export { StyledSidebar, CmsPage };
