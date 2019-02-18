import styled from 'styled-components';

const theme = {
	baseText: '#666', 
	brandColor: '#00aa9c'
}

const BaseStyles = styled.div`
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

export default theme;
export { BaseStyles };
