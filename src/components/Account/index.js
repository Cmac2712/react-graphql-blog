import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query} from 'react-apollo';
import FloatingLabel from 'floating-label-react';
import Portal from '../Portal';
import Loading from '../Loading';
import { Wrapper, Form, FormWrapper, Button, inputStyle } from '../App/Theme';
import Sidebar from '../Cms/Sidebar';
import Avatar from '../Avatar';
import { AccountFormWrapper } from './style.js';

// Update User
const UPDATE_USER_INFO_MUTATION = gql`
	mutation UPDATE_USER_INFO_MUTATION(
		$screenName: String
		$avatar: String
	) {
	updateUserInfo(
		screenName: $screenName,
		avatar: $avatar
	) {
			id
			screenName
			avatar
		}
	}
`;

const USER_INFO_QUERY = gql`
	query {
		me {
			id 
			screenName
			avatar
		}
	}
`;

class Account extends Component {

	state = {
		screenName: '', 
		avatar: '', 
		uploading: false
	}	

	uploadImage = async () => {
		const file = this.state.file;
		const data = new FormData();

		// If we haven't added a file to be uploaded
		if (!file) return;

		data.append('file', file);
		data.append('upload_preset', 'sickfits');

		this.setState({ uploading: true });
		const res = await fetch('https://api.cloudinary.com/v1_1/cmacintyre/image/upload',
			{
				method: 'POST',
				body: data,
			});

		const avatar = await res.json();
		this.setState({
			avatar: avatar.secure_url
		});

		return avatar;
	};

	saveToState = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleFile = e => {
		this.setState({ file: e.target.files[0] });

		setTimeout(() => {
			this.buttonRef.click();
		}, 0);
	}

	handleSubmit = async (updateUserInfo, refetch) => {
			await this.uploadImage();
			await updateUserInfo();
			await refetch();
			this.setState({ uploading: false });
	}

	render() {
		return (
			<AccountFormWrapper
				className="cms-section min-height"
			>
				<Query
					query={USER_INFO_QUERY}
				>
					{
						({ data, loading, refetch } ) => {

							if (loading) return <Loading/>;

							return (
								<Mutation
									mutation={UPDATE_USER_INFO_MUTATION}
									variables={{
										screenName: this.state.screenName || data.me.screenName, 
										avatar: this.state.avatar || data.me.avatar
									}}
								>
									{
										(updateUserInfo, loading, error) => {

											return (
												<>
												<h1>Account Details</h1>
												<Form
													onSubmit={e => {
														e.preventDefault();
														this.handleSubmit(updateUserInfo, refetch)
													}}
												>
													<fieldset>
														<div
															className={`avatar-wrapper ${this.state.uploading && `image-uploading`}`}
														>
															<Avatar
																onClick={() => {
																	this.avatarInput.click();
																}}
																avatar={data.me.avatar}
																width="150px"
																height="150px"
															/>
														</div>
														<input
															style={{
																display: 'none'
															}}
															placeholder="Avatar"
															type="file"
															name="avatar"
															ref={input => { this.avatarInput = input }}
															styles={inputStyle}
															onChange={this.handleFile}
														/>
														<label htmlFor="screen-name">Screen Name</label>
														<input
															id="screen-name"
															placeholder="Screen Name"
															type="text"
															name="screenName"
															styles={inputStyle}
															defaultValue={data.me.screenName}
															onChange={this.saveToState}
														/>
														<Button
															ref={button => { this.buttonRef = button }}
														>Update
														</Button>
													</fieldset>
												</Form>
												</>
											);
										}
									}
								</Mutation>
							)
						}
					}
				</Query>

			</AccountFormWrapper>
		)
	}
}

export default Account;
