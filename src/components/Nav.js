import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = props => (
		<nav>
			<Link to={`/`}>
				Home
			</Link>
			<Link to={`/login`}>
				Log In
			</Link>
		</nav>
);

export default Nav;
