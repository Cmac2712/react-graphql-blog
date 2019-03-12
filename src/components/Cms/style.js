import styled from 'styled-components';

const CmsPage = styled.div`
	display: flex;
	flex-direction: column;

	.cms-section {
		position: relative;
		margin-left: ${props => props.theme.spacingUnit}px;
		margin-right: ${props => props.theme.spacingUnit}px;
	}

	h1 {
		line-height: 1.5rem;
		margin-bottom: ${props => props.theme.spacingUnit}px;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.laptop}px) {
		flex-direction: row;
	}

`;

const StyledSidebar = styled.nav`
	display: flex;	
	flex: 0 0 auto;
	width: 100%;
	padding: ${props => props.theme.spacingUnit}px 0;
	padding-top: 0;
	border-right: 1px solid #ddd;
	position: relative;
	z-index: 999;
	background-color: #fff;
	align-items: center;
	justify-content: center;

	a {
		padding: ${props => (props.theme.spacingUnit/2)}px;

		@media screen and (min-width: ${props => props.theme.breakpoints.laptop}px) {
			border-bottom: 1px solid #ddd;
		}
	}

	a:first-child {
		@media screen and (min-width: ${props => props.theme.breakpoints.laptop}px) {
			border-top: 1px solid #ddd;
		}
	}

	button {
		@media screen and (min-width: ${props => props.theme.breakpoints.laptop}px) {
			margin-top: ${props => (props.theme.spacingUnit/2)}px;
		}
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.laptop}px) {
		justify-content: flex-start;
		align-items: stretch;
		flex-direction: column;
		flex: 0 0 200px;
	}

`;


export { StyledSidebar, CmsPage };
