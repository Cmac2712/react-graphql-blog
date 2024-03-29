import React, { useState, Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { endpoint, productionEndpoint } from "../../config";
import theme, { GlobalStyle } from "./Theme";
import { ThemeProvider } from "styled-components";
import Nav from "../Nav";
import Posts from "../Posts";
import SinglePost from "../SinglePost";
import RequestReset from "../RequestReset";
import Reset from "../Reset";
import Cms from "../Cms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../Footer";

const client = new ApolloClient({
  uri: process.env.REACT_APP_LOCAL ? endpoint : productionEndpoint,
  request: operation => {
    operation.setContext({
      fetchOptions: {
        credentials: "include",
      },
    });
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router>
            <>
              <Nav />
              <Route exact path={`/`} component={Posts} />
              <Route path={`/cms`} component={Cms} />
              <Route path={`/reset`} component={Reset} />
              <Route path={`/request-reset`} component={RequestReset} />
              <Route path={`/single`} component={SinglePost} />
            </>
          </Router>
          <Footer />
        </>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
