import styled from 'styled-components';

const StyledSidebar = styled.nav`
	float: left;
	display: flex;	
	flex-direction: column;
	height: 100%;
	max-width: 15vw;
	width: 100%;
	padding: ${props => props.theme.spacingUnit} 0;
	padding-top: 110px;
	border-right: 1px solid #ddd;
	position: relative;
	z-index: 999;


	a {
		padding: ${props => props.theme.spacingUnitHalf};
		border-bottom: 1px solid #ddd;
	}

	a:first-child {
		border-top: 1px solid #ddd;
	}

	button {
		margin-top: ${props => props.theme.spacingUnitHalf};
	}
`;

export { StyledSidebar };
