const queries = {
  getPost: (_, content) => {

	  const post = global.posts.find(post => {
		  return content.id === post.id;  
	  });

	  return post.content;
  }, 
	me(parent, args, ctx, info) {
		// Check if there is a current user ID 
		if (!ctx.request.userId) {
			return null;
		}
		return ctx.prisma.query.user({
			where: { id: ctx.request.userId }
		}, info);
	}, 
} 

module.exports = queries;
