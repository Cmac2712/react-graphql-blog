require('dotenv').config({ path: './server/variables.env' });
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const { Prisma } = require('prisma-binding');

// Create our Prisma instance to communicate with the db
const prisma = new Prisma({
		typeDefs: './server/generated/prisma.graphql', 
		endpoint: process.env.PRISMA_ENDPOINT,  
    secret: process.env.PRISMA_SECRET, 
    debug: false
});

const server = new GraphQLServer({
	typeDefs: './server/schema.graphql',
	resolvers: {
		Mutation, 
		Query
	}, 
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
	context: req => ({
		...req, 
		prisma
	})
});

server.express.use(bodyParser({limit: '5mb'}));

server.express.use(cookieParser());

// decode jwt
server.express.use((req, res, next) => {
	const { token } = req.cookies;

	if (token) {
		const { userId } = jwt.verify(token, process.env.APP_SECRET);
		// Put the UserId onto the request for further requests to access
		req.userId = userId;
	}

	next();
});

// 2. Create a middleware which will populate the user on each request
server.express.use(async (req, res, next) => {
	// If they aren't logged in,  skip this
	if (!req.userId) return next();

	const user = await prisma.query.user(
		{ where: { id: req.userId } }, 
		'{ id, email, name }'
	);

	next();
});

server.start({
    cors: {
		credentials: true, 
		origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`Server is now running on http://localhost:${deets.port}`);
});
