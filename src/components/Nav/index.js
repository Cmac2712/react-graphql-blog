import React, { Component } from 'react';
import Signout from '../Signout';
import { Link } from 'react-router-dom';
import User, { CURRENT_USER_QUERY } from '../User';
import NavBar from './styles';

const Nav = props => (
		<NavBar>
			<User>
				{
					({data, loading}) => {

						if (data && data.me) {
							return (
								<>
								<Link to={`/`}>
									Home
								</Link>
								<Link to={`/createpost`}>
									Add Post
								</Link>
							</>
							)
						}

						return (
							<>
								<Link to={`/`}>
									Home
								</Link>
								<Link to={`/account`}>
									Log In / Create an Account
								</Link>
							</>
						)
					}
				}
			</User>
		</NavBar>
);

export default Nav;
