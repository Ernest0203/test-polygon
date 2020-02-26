import Router from 'koa-router';
import compose from 'koa-compose';

const router = new Router();

router.get('/', (ctx) => ctx.body = 'Working');

export default compose([router.routes(), router.allowedMethods()]);