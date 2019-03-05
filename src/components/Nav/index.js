import React, { Component } from 'react';
import Signout from '../Signout';
import { Link } from 'react-router-dom';
import User, { CURRENT_USER_QUERY } from '../User';
import NavBar from './styles';

const Nav = props => (
	<NavBar
		data-test
	>
			<Link
				className="logo"
				to={`/`}
			>
				React GraphQl Blog
			</Link>
			<User>
				{
					({data, loading}) => {

						if (data && data.me) {
							return (
								<Link to={`/cms/create-post`}>
									Dashboard
								</Link>
							)
						}

						return (
								<Link
									to={`/cms/create-post`}>
									Log In / Create an Account
								</Link>
						)
					}
				}
			</User>
		</NavBar>
);

export default Nav;
