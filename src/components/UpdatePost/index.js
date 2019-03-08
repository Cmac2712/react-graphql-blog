import React, { Component } from 'react';
import gql from 'graphql-tag';
import qs from 'query-string';
import { Query, Mutation } from 'react-apollo';
import Loading from '../Loading';
import { Form, Button } from '../App/Theme';
import { SINGLE_POST_QUERY } from '../SinglePost';

const UPDATE_POST_MUTATION = gql`
  mutation UPDATE_POST_QUERY($id: ID!, $title: String, $content: String) {
	updatePost(id: $id, title: $title, content: $content) {
	  id
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
		await updatePost({
			variables: {
				id: this.props.id,
				...this.state,
			},
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

					return (
						<Mutation
							mutation={UPDATE_POST_MUTATION}
							variables={this.state}
						>
							{(updatePost, { loading, error }) => {
								return (
									<Form
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
											<textarea
												id="content"
												name="content"
												placeholder="content"
												defaultValue={data.post.content}
												onChange={this.handleChange}
											/>
											<Button>Submit</Button>
										</fieldset>
									</Form>
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
