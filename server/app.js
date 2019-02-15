const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

global.posts = [{id: "12345", content: "This is my sample post"}];
global.users = [{id: "54321", name: "testuser", email: "test@test.com", password: "password"}];


const server = new GraphQLServer({
	typeDefs: './server/schema.graphql',
	resolvers: {
		Mutation, 
		Query
	}
});

server.start(() => console.log('Server is running on localhost:4000'))
