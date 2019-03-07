import styled from 'styled-components';

const NavBar = styled.nav`
	display: flex;
	align-items: center;
	//padding: ${props => props.theme.spacingUnit}px;
	position: relative;
	z-index: 5;
	margin: 0 auto;
	max-width: ${props => props.theme.wrapperWidth};
	width: 100%;
	padding: ${props => props.theme.spacingUnit}px;

	.logo {
		font-family: ${props => props.theme.headerFont};
		font-size: 1.5rem;
		font-weight: bold;
		margin-right: auto;
		color: ${props => props.theme.brandColor};
		padding: 0;
	}
	
	a {
		color: ${props => props.theme.baseText};
		padding: 0 ${props => props.theme.spacingUnit}px;
	}
`;

export default NavBar;
