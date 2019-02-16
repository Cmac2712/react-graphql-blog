import React, { Component } from 'react';
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
								<Link to={`/login`}>
									Log Out
								</Link>
							</>
							)
						}

						return (
							<>
								<Link to={`/`}>
									Home
								</Link>
								<Link to={`/login`}>
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
