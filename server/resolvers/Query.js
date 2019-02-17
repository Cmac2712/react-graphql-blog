const { forwardTo } = require('prisma-binding');

const queries = {
	me(parent, args, ctx, info) {
		// Check if there is a current user ID 
		if (!ctx.request.userId) {
			return null;
		}
		return ctx.prisma.query.user({
			where: { id: ctx.request.userId }
		}, info);
	},
	posts: forwardTo('prisma'), 
	post: forwardTo('prisma')
}

module.exports = queries;
