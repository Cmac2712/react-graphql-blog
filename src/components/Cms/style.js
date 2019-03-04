import styled from 'styled-components';

const StyledSidebar = styled.nav`
	float: left;
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

	+ Wrapper {
		border: 1px red solid;
	}

`;

export { StyledSidebar };