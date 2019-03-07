import React, { Component } from 'react';
import gql from 'graphql-tag';
import Loading from '../Loading';
import { Mutation } from 'react-apollo';
import { ALL_POSTS_QUERY } from '../Posts'; 
import { CreatePostForm } from './style';
import { Wrapper, FormWrapper, Form, Button } from '../App/Theme';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

// TODO: Add floating labels

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
			editorState
			thumbnail
		}
	}
`;

class CreatePost extends Component {

	state = {
		title: '', 
		content: '', 
		editorState: EditorState.createEmpty(), 
		uploading: false
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

    const res = await fetch('https://api.cloudinary.com/v1_1/cmacintyre/image/upload',
		{
      method: 'POST',
      body: data,
    });

    const thumbnail = await res.json();

    this.setState({
      thumbnail: thumbnail.secure_url,
    });

		return thumbnail;
	};

	handleEditorStateChange = editorState => {
		const rawContentState = convertToRaw(editorState.getCurrentContent());
		const markup = draftToHtml(rawContentState);

		this.setState({
			editorState, 
			content: markup
		});
	}

	render() {
		return (
					<Mutation
						mutation={CREATE_POST_MUTATION}
						variables={this.state}
						refetchQueries={[{query: ALL_POSTS_QUERY}]}
					>
				{
					(createPost, { loading, error }) => {

						return (
							<FormWrapper>
								{ loading && <Loading/> }
								<CreatePostForm
									id="create-post-form"
									className="cms-section"
									disabled={this.state.publishing}
									onSubmit={async e => {
										  e.preventDefault();
										  this.setState({ uploading: true });
										
										  const thumbnail = await this.uploadImage(e);
										  const { data } = await createPost();

										  this.setState({ uploading: false });

											this.props.history.push(`/single?postId=${data.createPost.id}`)
										}}
									>
										<fieldset>
										<h1>Create Post</h1>
										<input
											type="text"
											name="title"
											placeholder={`Title`}
											value={this.state.title}
											onChange={this.saveToState}
										/>
										<Editor
											id="content"
											name="content"
											rows="10"
											placeholder={`Write your post here...`}
											wrapperClassName="editor-wrapper"
											editorClassName="editor"
											toolbarClassName="editor-toolbar"
											value={this.state.content}
											onEditorStateChange={this.handleEditorStateChange}
										/>
										<input
											type="file"
											name="file"
											onChange={this.handleFile}
										/>
										<Button>Publish{this.state.uploading && 'ing'}</Button>
									</fieldset>
								</CreatePostForm>
							</FormWrapper>
						)
					}
				}
					</Mutation>
		)
	}
}

export default CreatePost;
