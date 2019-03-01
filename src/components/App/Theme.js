import styled from 'styled-components';
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
	spacingUnit: '25px',  
	spacingUnitHalf: '12.5px', 
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
		left: `${theme.spacingUnitHalf}`, 
		padding: `0 ${theme.spacingUnitHalf}`, 
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
		left: `${theme.spacingUnitHalf}`, 
		padding: `0 ${theme.spacingUnitHalf}`, 
		top: '15px', 
		display: 'inline-block', 
		backgroundColor: `#eee`
	}, 
	input: {
		...inputStyles,
		border: `1px #ddd solid`, 
		borderColor: `#ddd`, 
		backgroundColor: '#f6f6f6', 
		display: 'block', 
		padding: `${theme.spacingUnitHalf} ${theme.spacingUnitHalf}`, 
		backgroundColor: `#eee`, 
		color: `${theme.baseText}`
	},
	label: {
		...labelStyles,
		display: 'block', 
		color: '#999', 
		font: 'inherit', 
		marginBottom: `${theme.spacingUnit}`
	}
}

const BaseStyles = styled.div`

	color: ${props => props.theme.baseText};

	h1, 
	h2, 
	h3, 
	h4, 
	h4 {
		margin-top: 0;
		margin-bottom: ${props => props.theme.spacingUnitHalf};
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
	}

	input, 
	textarea{
		display: block;
		border: 0;
		background-color: #f6f6f6;
		border-radius: 4px;
		padding: ${props => props.theme.spacingUnitHalf} ${props => props.theme.spacingUnit};

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
	padding: ${props => props.theme.spacingUnitHalf} ${props => props.theme.spacingUnit};
`;

export default theme;
export { BaseStyles, Wrapper, FormWrapper, Form, Button, inputStyle };
