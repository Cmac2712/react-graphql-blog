import React, { Component } from 'react'; 
import ReactSVG from 'react-svg'

const Loading = props => (
	<ReactSVG
		src="./images/LoadingIcon.svg"
		wrapper="span"
		onInjected={(error) => {
			console.log({error});
			return;
		}}
		svgClassName="loading-icon"
		svgStyle={{width: 50}}
	/>
);

export default Loading;
