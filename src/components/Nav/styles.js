import styled from 'styled-components';

const NavBar = styled.nav`
	display: flex;
	justify-content: flex-end;
	background-color: ${props => props.theme.brandColor};
	padding: ${props => props.theme.spacingUnit};
	${props => props.theme.boxShadow};
	position: relative;
	z-index: 5;
	
	a {
		color: #fff;
		padding: 0 ${props => props.theme.spacingUnit};
	}
`;

export default NavBar;
