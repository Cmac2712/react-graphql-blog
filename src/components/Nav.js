import React, { Component } from 'react';
import Signout from './Signout';
import { Link } from 'react-router-dom';
import User, { CURRENT_USER_QUERY } from './User';

const Nav = props => (
		<nav>
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
									Create Post
								</Link>
								<Signout/>
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
		</nav>
);

export default Nav;
