import styled from 'styled-components';

const NavBar = styled.nav`
	display: flex;
	//justify-content: flex-end;
	align-items: center;
	padding: ${props => props.theme.spacingUnit}px;
	position: relative;
	z-index: 5;

	.logo {
		margin-right: auto;
		color: ${props => props.theme.brandColor};
	}
	
	a {
		color: ${props => props.theme.baseText};
		padding: 0 ${props => props.theme.spacingUnit}px;
	}
`;

export default NavBar;
