import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';
import express from 'express';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const service = express();

const bindSessionToRequest = (req, res, next) => sapper.middleware({
	session: () => ({})
})(req, res, next)

service.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	bindSessionToRequest
)

service.listen(PORT, () => {
	console.log("service up on 3000")
});
