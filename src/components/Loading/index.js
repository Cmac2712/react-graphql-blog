import React, { Component } from 'react'; 
import ReactSVG from 'react-svg';
import StyledLoading from './style';

const Loading = props => (
	<StyledLoading>
		<ReactSVG
			src="/images/LoadingIcon.svg"
			wrapper="span"
			onInjected={(error) => {
				error && console.log(error);
				return;
			}}
			svgClassName="loading-icon"
			svgStyle={{
				height: 50, 
				width: 50
			}}
		/>
	</StyledLoading>
);

export default Loading;
