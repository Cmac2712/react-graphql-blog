const uniqid = require('uniqid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
});

const createEmail = text => `
<div className="email" style="
	border: 1px solid #666;
	padding: 20px;
	font-family: sans-serif;
	line-height: 2;
	font-size: 16px;
  ">
  <h2>Hello There!</h2>
  <p>${text}</p>

  <p>Craig MacIntyre</p>
  </div>
`;

const mutations = {
	async createPost(parent, { title, content }, ctx, info) {

		if (!ctx.request.userId) {
			throw new Error('You are not logged in!');
		}

		const post = ctx.prisma.mutation.createPost({
			data: {
				title, 
				content, 
				user: {
					connect: {
						id: ctx.request.userId
					}
				}
			}
		}, info);

		return post;
	}, 
  updatePost(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.prisma.mutation.updatePost(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
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
	async requestReset(parent, args, ctx, info) {
		// 1. Check if this is a real user
		const user = await ctx.prisma.query.user({ where: { email: args.email } });
		if (!user) {
			throw new Error(`No such user found for email ${args.email}`);
		}
		// 2. Set a reset token and expiry on that user
		const randomBytesPromiseified = promisify(randomBytes);
		const resetToken = (await randomBytesPromiseified(20)).toString('hex');
		const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
		const res = await ctx.prisma.mutation.updateUser({
			where: { email: args.email },
			data: { resetToken, resetTokenExpiry },
		});
		// 3. Email them that reset token
		const mailRes = await transport.sendMail({
			from: 'craig@craigmacintyre.io',
			to: user.email,
			subject: 'Your Password Reset Token',
			html: createEmail(`Your Password Reset Token is here!
	  \n\n
	  <a href="${process.env
		.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`),
		});

		// 4. Return the message
		return { message: 'Thanks!' };
	},
	async resetPassword(parent, args, ctx, info) {
		// 1. check if the passwords match
		if (args.password !== args.confirmPassword) {
			throw new Error("Passwords do not patch");
		}
		// 2. check if its a legit reset token
		// 3. Check if its expired
		const [user] = await ctx.prisma.query.users({
			where: {
				resetToken: args.resetToken,
				resetTokenExpiry_gte: Date.now() - 3600000,
			},
		});
		if (!user) {
			throw new Error('This token is either invalid or expired!');
		}
		// 4. Hash their new password
		const password = await bcrypt.hash(args.password, 10);
		// 5. Save the new password to the user and remove old resetToken fields
		const updatedUser = await ctx.prisma.mutation.updateUser({
			where: { email: user.email },
			data: {
				password,
				resetToken: null,
				resetTokenExpiry: null,
			},
		});
		// 6. Generate JWT
		const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
		// 7. Set the JWT cookie
		ctx.response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 365,
		});
		// 8. return the new user
		return updatedUser;
	},
}

module.exports = mutations;
