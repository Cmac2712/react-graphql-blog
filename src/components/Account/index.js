import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Portal from '../Portal';
import { Wrapper, Form, FormWrapper, Button } from '../App/Theme';
import Sidebar from '../Cms/Sidebar';

// Update User
const UPDATE_USER_INFO_MUTATION = gql`
	mutation UPDATE_USER_INFO_MUTATION(
		$screenName: String!
	) {
	updateUserInfo(screenName: $screenName) {
			id
		}
	}
`;

class Account extends Component {

	state = {
		screenName: '', 
		avatar: ''
	}	

	saveToState = e => {
		this.setState({[e.target.name]: e.target.value});
	}
	
	render() {
		return (
		<Mutation
			mutation={UPDATE_USER_INFO_MUTATION}
			variables={
				{
					screenName: this.state.screenName	
				}
			}
		>
			{
				(updateUserInfo, loading, error) => {
					return (
								<Portal>
									<Sidebar/>
									<Wrapper>
										<FormWrapper
												onSubmit={
													async e => {
														e.preventDefault();

														const userInfo = await updateUserInfo();

														console.log(userInfo);
													}
											}
										>
											<Form>
												<fieldset>
													<input
														placeholder="Screen Name"
														type="text"
														name="screenName"
														value={this.state.screenName}
														onChange={this.saveToState}
														onChange={this.saveToState}
													/>
													<input placeholder="Avatar" type="avatar" />
													<Button>Update</Button>
												</fieldset>
											</Form>
										</FormWrapper>
									</Wrapper>
								</Portal>
					);
				}
			}
		</Mutation>
		)
	}
}

export default Account;
