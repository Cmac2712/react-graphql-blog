import styled from 'styled-components';

const theme = {
	baseText: '#666', 
	brandColor: '#00aa9c', 
	warn: '#aa2222', 
	spacingUnit: '25px', 
	spacingUnitHalf: '12.5px', 
	wrapperWidth: '1280px', 
	boxShadow: 'box-shadow: 2px 3px 0 rgba(0, 0, 0, .1);'
}

const BaseStyles = styled.div`

	color: ${props => props.theme.baseText};

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

const Form = styled.form`

	fieldset {
		max-width: 100%;
	}

	input, 
	textarea{
		display: block;
		border: 0;
		background-color: #f6f6f6;
		margin-bottom: ${props => props.theme.spacingUnit};
		border-radius: 4px;
		padding: ${props => props.theme.spacingUnitHalf} ${props => props.theme.spacingUnit};

		&::placeholder {
			color: #999;
		}
	}

	fieldset {
		border: none;
	}
`;

const Button = styled.button`
	border: none;
	background-color: ${props => props.theme.brandColor};
	color: #fff;
	border-radius: 2px;
	padding: ${props => props.theme.spacingUnitHalf} ${props => props.theme.spacingUnit};
`;

export default theme;
export { BaseStyles, Wrapper, Form, Button };
