import React from 'react';
import { Link } from 'react-router-dom';
import Signout from '../Signout';
import { StyledSidebar } from './style';

const Sidebar = props => (
	<StyledSidebar>
		<Link to={`/cms/create-post`}>
			Create Post
		</Link>
		<Link to={`/cms/account`}>
			Account
		</Link>
		<Link to={`/cms/myposts`}>
			My Posts
		</Link>
		<Signout/>
	</StyledSidebar>
);

export default Sidebar;
