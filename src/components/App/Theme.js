import styled from 'styled-components';

const theme = {
	baseText: '#666', 
	brandColor: '#00aa9c', 
	warn: '#aa2222', 
	spacingUnit: '25px', 
	spacingUnitHalf: '12.5px', 
	wrapperWidth: '1280px'
}

const BaseStyles = styled.div`

	color: ${props => props.theme.baseText};
	background-color: #eee;
	height: 100vh;

	h1, 
	h2, 
	h3, 
	h4, 
	h4 {
		color: ${props => props.theme.brandColor};
	}

	a {
		color: ${props => props.theme.brandColor};
		text-decoration: none;
	}
`; 

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${props => props.theme.wrapperWidth};
`;

export default theme;
export { BaseStyles, Wrapper };
