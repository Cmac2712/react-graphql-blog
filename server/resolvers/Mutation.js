const uniqid = require('uniqid');

const mutations = {
	addPost: (_, { content }) => {
		const id = uniqid();

		global.posts.push({
			id: id, 
			content: content
		});

		return id;
	}, 
	signup(_, { email, password, name }) {

		const user = {
			id: uniqid(), 
			name: name, 
			email: email, 
			password: password
		};

		global.users.push(user);

		return user;
	}, 
	signin(_, { email, password }) {}, 
	requestReset(_, { content }) {}, 
	resetPassword(_, { content }) {}, 
}

module.exports = mutations;
