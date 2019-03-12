import React, { Component } from 'react';
import gql from 'graphql-tag';
import qs from 'query-string';
import { Query, Mutation } from 'react-apollo';
import Loading from '../Loading';
import { Form, Button } from '../App/Theme';
import { UpdatePostForm } from './style';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { SINGLE_POST_QUERY } from '../SinglePost';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

const UPDATE_POST_MUTATION = gql`
  mutation UPDATE_POST_QUERY($id: ID!, $title: String, $content: String) {
	updatePost(id: $id, title: $title, content: $content) {
	  id
		content
	}
  }
`;

class UpdatePost extends Component {

	state = {
		id: qs.parse(this.props.location.search).postId 
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async (updatePost) => {
		const rawEditorState = convertToRaw(this.state.editorState.getCurrentContent())
		this.setState({ uploading: true });

		const { data } = await updatePost({
			variables: {
				...this.state,
				content: JSON.stringify(rawEditorState)
			},
		});

		this.setState({ uploading: false });
		this.props.history.push(`/single?postId=${data.updatePost.id}`)
	}

	handleEditorStateChange = editorState => {
		this.setState({
			editorState: editorState
		});
	}

	render() {
		return (
			<Query
				query={SINGLE_POST_QUERY}
				variables={this.state}
			>
				{({data, loading}) => {

					if (loading) return <Loading/>;

					const content = convertFromRaw(JSON.parse(data.post.content)); 

					return (
						<Mutation
							mutation={UPDATE_POST_MUTATION}
							variables={this.state}
						>
							{(updatePost, { loading, error }) => {

								if (loading) return <Loading/>;

								return (
									<UpdatePostForm
										className="cms-section"
										onSubmit={e => {
											e.preventDefault();
											this.handleSubmit(updatePost);
										}}
									>
										<fieldset>
											<h1>Update Post</h1>
											<input
												type="text"
												id="title"
												name="title"
												placeholder="title"
												defaultValue={data.post.title}
												onChange={this.handleChange}
											/>
											<Editor
												id="content"
												name="content"
												rows="10"
												wrapperClassName="editor-wrapper"
												editorClassName="editor"
												toolbarClassName="editor-toolbar"
												defaultEditorState={EditorState.createWithContent(content)}
												onEditorStateChange={this.handleEditorStateChange}
											/>
											<Button>Publish{this.state.uploading && 'ing'}</Button>
										</fieldset>
									</UpdatePostForm>
								)
							}}
						</Mutation>
					)
				}}
			</Query>
		)
	}
}

export default UpdatePost;
