import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query} from 'react-apollo';
import FloatingLabel from 'floating-label-react';
import Portal from '../Portal';
import { Wrapper, Form, FormWrapper, Button, inputStyle } from '../App/Theme';
import Sidebar from '../Cms/Sidebar';
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
		avatar: ''
	}	

	uploadImage = async () => {
		const file = this.state.file;
		const data = new FormData();

		// If we haven't added a file to be uploaded
		if (!file) return;

		data.append('file', file);
    data.append('upload_preset', 'sickfits');

    const res = await fetch('https://api.cloudinary.com/v1_1/cmacintyre/image/upload',
		{
      method: 'POST',
      body: data,
    });

    const avatar = await res.json();

    this.setState({
      avatar: avatar.secure_url,
    });

		return avatar;
	};

	saveToState = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleFile = e => {
		this.setState({
			file: e.target.files[0]
		})
	}

	handleSubmit = async (updateUserInfo, refetch) => {
		this.setState({loading: true});

		const screenNameHasChanged = this.state.screenName !== ''; 
		const avatarHasChanged = this.state.avatar !== ''; 

		if (avatarHasChanged) {
			const avatar = await this.uploadImage();
		}
	
		if (screenNameHasChanged) {
			const userInfo = await updateUserInfo();
			refetch();
		}

		this.setState({loading: false});
	}

	render() {
		return (
			<Query
				query={USER_INFO_QUERY}
			>
			{
				({ data, loading, refetch } ) => {

					console.log(data);

					if (loading) return <p>Loading...</p>;

					if (this.state.loading) return <p>also loading...</p>

					return (
						<Mutation
							mutation={UPDATE_USER_INFO_MUTATION}
							variables={this.state}
						>
							{
								(updateUserInfo, loading, error) => {
									return (
														<AccountFormWrapper
																className="cms-section"
																onSubmit={e => {
																		e.preventDefault();
																		this.handleSubmit(updateUserInfo, refetch)
																	}}
														>
															<h1>Account Details</h1>
															<Form>
																<fieldset>
																	<input
																		placeholder="Screen Name"
																		type="text"
																		name="screenName"
																		styles={inputStyle}
																		defaultValue={data.me.screenName}
																		onChange={this.saveToState}
																	/>
																	<Button>Update</Button>
																</fieldset>
															</Form>
														</AccountFormWrapper>
									);
								}
							}
						</Mutation>
					)
				}
			}
			</Query>

		)
	}
}

export default Account;
