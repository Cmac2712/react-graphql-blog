import React, { Component } from 'react';
import PleaseSignIn from '../PleaseSignIn';
import CreatePost from '../CreatePost';
import Sidebar from './Sidebar';
import Portal from '../Portal';
import Account from '../Account';
import MyPosts from '../MyPosts';
import UpdatePost from '../UpdatePost';
import { CmsPage } from './style';
import { Wrapper } from '../App/Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Cms extends Component {
	render() {
		return (
					<Portal>
								<CmsPage>
									<Sidebar/>
										<Route exact path={`/cms`} component={CreatePost} />
										<Route path={`/cms/create-post`} component={CreatePost} />
										<Route path={`/cms/account`} component={Account} />
										<Route path={`/cms/myposts`} component={MyPosts} />
										<Route path={`/cms/update-post`} component={UpdatePost} />
								</CmsPage>
					</Portal>
		)
	}
}

export default Cms;
