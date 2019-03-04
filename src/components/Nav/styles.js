import styled from 'styled-components';

const NavBar = styled.nav`
	display: flex;
	justify-content: flex-end;
	padding: ${props => props.theme.spacingUnit}px;
	//background-color: ${props => props.theme.brandColor};
	//${props => props.theme.boxShadow};
	position: relative;
	z-index: 5;
	
	a {
		//color: #fff;
		padding: 0 ${props => props.theme.spacingUnit}px;
	}
`;

export default NavBar;
