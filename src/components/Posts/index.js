import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Post from "./Post";
import Loading from "../Loading";
import { Wrapper } from "../App/Theme";
import { StyledPosts } from "./style";

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      id
      title
      content
      thumbnail
      user {
        name
        screenName
        avatar
      }
    }
  }
`;

const clip = (text) => {
	return text.split(/\s+/).slice(0, 15).join(" ") + "...";
};

const Posts = () => {
  return (
    <Wrapper>
      <h2>Latest Posts</h2>
      <StyledPosts>
        <Query query={ALL_POSTS_QUERY}>
          {({ data: { posts }, loading, error }) => {

            if (loading) return <Loading />;

            return posts.map((post) => (
              <Post key={post.id} post={post} clip={clip} />
            ));
          }}
        </Query>
      </StyledPosts>
    </Wrapper>
  );
};

export default Posts;
export { ALL_POSTS_QUERY };
