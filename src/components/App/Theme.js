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
	baseFont: '"Open Sans", sans-serif', 
	headerFont: '"Alegreya", serif', 
	baseFontSize: 16, 
	smallFontSize: 12, 
	warn: '#aa2222', 
	spacingUnit: 25,  
	wrapperWidth: '1280px', 
	backgroundColor: '#fdfdfd', 
	uiColorLight: '#ddd', 
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
		backgroundColor: `${theme.backgroundColor}`, 
	}, 
	input: {
		...inputStyles,
		backgroundColor: `${theme.backgroundColor}`, 
		border: `1px ${theme.uiColorLight} solid`, 
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
		font-family: ${props => props.theme.headerFont};
		color: #444;
		margin-top: 0;
		padding-top: 0;
		margin-bottom: ${props => (props.theme.spacingUnit/4)}px;
	}

	a {
		color: ${props => props.theme.brandColor};
		text-decoration: none;
	}

	body {
		color: ${props => props.theme.baseText};
		font: ${props => props.theme.baseFontSize}px/2 ${props => props.theme.baseFont}, sans-serif;
		background-color: ${props => props.theme.backgroundColor};
	}

	.min-height {
		min-height: 50vh;
	}
	
`; 

const Wrapper = styled.div`
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
		border-radius: 4px;
		line-height: 1.5;
		padding: ${props => (props.theme.spacingUnit/2)}px ${props => (props.theme.spacingUnit/2)}px;
		margin-bottom: ${props => props.theme.spacingUnit}px;
		border: 1px solid ${props => props.theme.uiColorLight};
		width: 100%;

		&::placeholder {
			color: #999;
		}
	}

	fieldset {
		position: relative;
		border: none;
	}

	button {
		float: right;
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
