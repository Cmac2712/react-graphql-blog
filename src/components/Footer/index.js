import React, { Component } from 'react';
import { Wrapper } from '../App/Theme';
import StyledFooter from './style';
import ReactSVG from 'react-svg'

class Footer extends Component {

	getCurrentYear() {
		return new Date().getFullYear();
	}

	render() {
		return(
			<StyledFooter>
				<Wrapper>
					<div className="footer-container">
						<a
							href="https://github.com/Cmac2712/react-graphql-blog"
							className="github"
						>
							<span>View on GitHub</span>
							<ReactSVG
								src="/images/github.svg"
								wrapper="span"
								className="github-icon-container"
								onInjected={(error) => {
									error && console.log(error);
									return;
								}}
								svgClassName="github-icon"
								svgStyle={{
									height: 16, 
									width: 16,
										fill: 'red'
								}}
							/>
						</a>
						<a href="https://craigmacintyre.co.uk/" className="myname">
							Craig MacIntyre
						</a>
						<div className="year">
							 { this.getCurrentYear() }
						</div>
					</div>
				</Wrapper>
			</StyledFooter>
		);
	} 
}

export default Footer;
