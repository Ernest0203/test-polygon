import Koa from 'koa'
import convert from 'koa-convert';
import cors from 'koa-cors';
import logger from 'koa-logger';
import json from 'koa-json';
//import body from 'koa-bodyparser';
import body from 'koa-body';

import routes from './routes';

const app = new Koa();

app.use(logger());
app.use(convert(cors()));
app.use(json());
//app.use(body({ formLimit: '100mb', jsonLimit: '16mb' }));
app.use(body({ multipart: true, /*formidable:{uploadDir: './files'}*/ }));
app.use(routes);

export default app;
