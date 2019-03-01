import React from 'react';
import { Link } from 'react-router-dom';
import Signout from '../Signout';
import { StyledSidebar } from './styles';

const Sidebar = props => (
	<StyledSidebar>
		<Link to={`/cms`}>
			Create Post
		</Link>
		<Link to={`/account`}>
			Account
		</Link>
		<Signout/>
	</StyledSidebar>
);

export default Sidebar;
