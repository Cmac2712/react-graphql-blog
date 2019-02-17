import React, { Component } from 'react';
import gql from 'graphql-tag';
import qs from 'query-string';
import { Query, Mutation } from 'react-apollo';
import User from './User';

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
	post(where: { id: $id }) {
	  id
	  title
	  content
	}
  }
`;

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
		const { name, type, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async (updatePost) => {
		const res = await updatePost({

			variables: {
				id: this.props.id,
				...this.state,
			},
		});
		console.log(res);
	}

	render() {
		return (
			<Query
				query={SINGLE_POST_QUERY}
				variables={this.state}
			>
				{({data, loading}) => {

					if (loading) return <p>Loading...</p>;

					return (
						<Mutation
							mutation={UPDATE_POST_MUTATION}
							variables={this.state}
						>
							{(updatePost, { loading, error }) => {
								return (
									<form
										onSubmit={e => {
											e.preventDefault();
											this.handleSubmit(updatePost);
										}}
									>
										<fieldset>
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
											<button>Submit</button>
										</fieldset>
									</form>
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
