import React, { Component } from 'react';
import { Wrapper } from '../App/Theme';
import StyledFooter from './style';

class Footer extends Component {

	getCurrentYear() {
		return new Date().getFullYear();
	}

	render() {
		return(
			<StyledFooter>
				<Wrapper>
					<div className="footer-container">
						<div className="myname">
							Craig MacIntyre&nbsp;
						</div>
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
