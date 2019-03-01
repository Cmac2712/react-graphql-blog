import React, { Component } from 'react';
import PleaseSignIn from '../PleaseSignIn';
import CreatePost from '../CreatePost';
import Sidebar from './Sidebar';
import Portal from '../Portal';
import { Wrapper } from '../App/Theme';

class Cms extends Component {
	render() {
		return (
					<Portal>
							<Sidebar/>
							<Wrapper>
										<CreatePost/>
							</Wrapper>
					</Portal>
		)
	}
}

export default Cms;
