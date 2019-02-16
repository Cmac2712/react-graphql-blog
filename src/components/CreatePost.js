import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import PleaseSignIn from './PleaseSignIn';

const CREATE_POST_MUTATION = gql`
	mutation CREATE_POST_MUTATION($title: String!, $content: String!) {
		createPost(title: $title, content: $content) {
			id
			title
			content
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

	render() {
		return (
			<PleaseSignIn>
				<Mutation
					mutation={CREATE_POST_MUTATION}
					variables={this.state}
				>
			{
				(createPost, { loading, error }) => {

					if (loading) return <p>posting...</p>
					
					return (
					<form
						onSubmit={async e => {
							e.preventDefault();
							const post = await createPost();
							this.setState({
								title: '', 
								content: ''
							});
							console.log(post);
						}}
					>
						<fieldset>
							<input
								type="text"
								name="title"
								value={this.state.title}
								onChange={this.saveToState}
							/>
							<textarea
								id="content"
								name="content"
								value={this.state.content}
								onChange={this.saveToState}
							/>
							<button>Publish</button>
						</fieldset>
					</form>
					)
				}
			}
				</Mutation>
			</PleaseSignIn>
		)
	}
}

export default CreatePost;
