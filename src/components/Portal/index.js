import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User';
import Signin from '../Signin';
import Signup from '../Signup';
import Loading from '../Loading';
import { Wrapper } from '../App/Theme';
import { SignInStyles } from './style';
import PropTypes from 'prop-types';


class Portal extends Component {

	static propTypes = {
		children: PropTypes.node.isRequired
	}

	render() {
		return (
  		<Query query={CURRENT_USER_QUERY}>
			{({ data, loading }) => {
				if (loading) return <Loading/>;
				if (!data.me) {
					return (
						<SignInStyles>
							<Wrapper>
								<div className="forms">
									<Signin/>
									<Signup/>
								</div>
							</Wrapper>
						</SignInStyles>
					);
				}
				return this.props.children;
			}}
  		</Query>
		)
	}

}

export default Portal;
