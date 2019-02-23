import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import PleaseSignIn from '../PleaseSignIn';
import { ALL_POSTS_QUERY } from '../Posts'; 
import { Wrapper, Form, Button } from '../App/Theme';
import { CreatePostForm } from './styles';

const CREATE_POST_MUTATION = gql`
	mutation CREATE_POST_MUTATION(
		$title: String!
		$content: String!
		$thumbnail: String
	) {
	createPost(
		title: $title
		content: $content 
		thumbnail: $thumbnail
	) {
			id
			title
			content
			thumbnail
		}
	}
`;

class CreatePost extends Component {

	state = {
		title: '', 
		content: ''
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleFile = e => {
		this.setState({
			file: e.target.files[0]
		})
	}

	uploadImage = async e => {
		const file = this.state.file;
		const data = new FormData();

		data.append('file', file);
    data.append('upload_preset', 'sickfits');

		console.log(data);

    const res = await fetch('https://api.cloudinary.com/v1_1/cmacintyre/image/upload',
		{
      method: 'POST',
      body: data,
    });

    const thumbnail = await res.json();

		console.log({ thumbnail });

    this.setState({
      thumbnail: thumbnail.secure_url,
    });
	};

	render() {
		return (
			<PleaseSignIn>
				<Wrapper>
					<Mutation
						mutation={CREATE_POST_MUTATION}
						variables={this.state}
						refetchQueries={[{query: ALL_POSTS_QUERY}]}
					>
				{
					(createPost, { loading, error }) => {

						if (loading) return <p>posting...</p>

						return (
						<CreatePostForm
							onSubmit={async e => {
								e.preventDefault();
								await this.uploadImage(e);

								const { data } = await createPost();

								this.props.history.push(`/single?postId=${data.createPost.id}`)
							}}
						>
							<fieldset>
								<input
									type="text"
									name="title"
									placeholder={`Title`}
									value={this.state.title}
									onChange={this.saveToState}
								/>
								<textarea
									id="content"
									name="content"
									rows="10"
									placeholder={`Write your post here...`}
									value={this.state.content}
									onChange={this.saveToState}
								/>
								<input
									type="file"
									name="file"
									onChange={this.handleFile}
								/>
								<Button>Publish</Button>
							</fieldset>
						</CreatePostForm>
						)
					}
				}
					</Mutation>
				</Wrapper>
			</PleaseSignIn>
		)
	}
}

export default CreatePost;
