import styled, { createGlobalStyle } from 'styled-components';

import FloatingLabel, {
	floatingStyles,
	focusStyles,
	inputStyles,
	labelStyles, 
	spanStyles

} from 'floating-label-react'

const theme = {
	baseText: '#666', 
	brandColor: '#00aa9c', 
	baseFontSize: 16, 
	smallFontSize: 12, 
	warn: '#aa2222', 
	spacingUnit: 25,  
	wrapperWidth: '1280px', 
	boxShadow: 'box-shadow: 2px 3px 0 rgba(0, 0, 0, .1);', 
	breakpoints: {
		mobile: 768, 
		laptop: 1024
	}
}

const inputStyle = {
	floating: {
		...floatingStyles,
		left: `${(theme.spacingUnit/2)}px`, 
		padding: `0 ${(theme.spacingUnit/2)}px`, 
		color: `${theme.brandColor}`, 
		top: '-2px', 
	},
	focus: {
		...focusStyles,
		border: `1px ${theme.brandColor} solid`, 
		borderColor: `${theme.brandColor}`, 
	},
	span: {
		...spanStyles, 
		left: `${(theme.spacingUnit/2)}px`, 
		padding: `0 ${(theme.spacingUnit/2)}px`, 
		top: '15px', 
		display: 'inline-block', 
		backgroundColor: `#fff`
	}, 
	input: {
		...inputStyles,
		border: `1px #ddd solid`, 
		borderColor: `#ddd`, 
		display: 'block', 
		padding: `${(theme.spacingUnit/2)}px ${(theme.spacingUnit/2)}px`, 
		color: `${theme.baseText}`
	},
	label: {
		...labelStyles,
		display: 'block', 
		color: '#999', 
		font: 'inherit', 
		marginBottom: `${theme.spacingUnit}px`
	}
}

const GlobalStyle = createGlobalStyle`

	color: ${props => props.theme.baseText};

	h1, 
	h2, 
	h3, 
	h4, 
	h4 {
		color: #333;
		margin-top: 0;
		margin-bottom: ${props => (props.theme.spacingUnit/4)};
	}

	a {
		color: ${props => props.theme.brandColor};
		text-decoration: none;
	}

	body {
		color: ${props => props.theme.baseText};
	}

`; 

const Wrapper = styled.div`

	${props => props.twoColumn && 'float: left;'};

	margin: 0 auto;
	max-width: ${props => props.theme.wrapperWidth};
`;

const FormWrapper = styled.div`
	position: relative;

	.loading-icon {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 5;
	}
`;

const Form = styled.form`

	position: relative;

	&[disabled] {
		opacity: .2;
	}

	fieldset {
		max-width: 100%;
		padding: 0;
	}

	input, 
	textarea{
		display: block;
		border: 0;
		border-radius: 4px;
		padding: ${props => (props.theme.spacingUnit/2)}px ${props => (props.theme.spacingUnit/2)}px;

		&::placeholder {
			color: #999;
		}
	}

	fieldset {
		position: relative;
		border: none;
	}
`;

const Button = styled.button`
	border: none;
	background-color: ${props => props.theme.brandColor};
	color: #fff;
	border-radius: 2px;
	padding: ${props => (props.theme.spacingUnit/2)}px ${props => (props.theme.spacingUnit/2)}px;
`;

export default theme;
export { GlobalStyle, Wrapper, FormWrapper, Form, Button, inputStyle };
