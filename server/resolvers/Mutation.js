const uniqid = require('uniqid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mutations = {
	async createPost(parent, { title, content }, ctx, info) {

		if (!ctx.request.userId) {
		  throw new Error('You are not logged in!');
		}

		const post = ctx.prisma.mutation.createPost({
			data: {
				title, 
				content
			}
		}, info);
		
		return post;
	}, 
	async signup(parent, { email, password, name }, ctx, info) {

		// Very important 
		const hashed = await bcrypt.hash(password, 10);

		const user = await ctx.prisma.mutation.createUser({
			data: {
				name, 
				email: email.toLowerCase(), 
				password: hashed 
			}
		}, info);

		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

		ctx.response.cookie('token', token, {
			httpOnly: true, 
			maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie 
		});

		return user;
	}, 
    signout(parent, args, ctx, info) {
      ctx.response.clearCookie('token');
      return { message: 'Goodbye!' };
    },
	async signin(parent, { email, password }, ctx, info) {

		const user = await ctx.prisma.query.user({ where: { email } });

		if (!user) {
			throw new Error(`No such user found for email ${email}`);
		}

		const valid = await bcrypt.compare(password, user.password);

		if (!valid) { throw new Error(`Invalid Password!`); }

		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

		ctx.response.cookie('token', token, {
			httpOnly: true, 
			maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie 
		});

		return user; 
	}, 
	requestReset(_, { content }) {}, 
	resetPassword(_, { content }) {}, 
}

module.exports = mutations;
