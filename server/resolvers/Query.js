const queries = {
	  getPost: (_, content) => {

		  const post = global.posts.find(post => {
			  return content.id === post.id;  
		  });

		  return post.content;
	  }, 
	me: (_, content) => {}
} 

module.exports = queries;
