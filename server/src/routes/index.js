import Router from 'koa-router';
import compose from 'koa-compose';

import files from './files';

const router = new Router();

router.get('/', (ctx) => ctx.body = 'Working');
router.use('/files', files);

export default compose([router.routes(), router.allowedMethods()]);