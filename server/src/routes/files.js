import Router from 'koa-router';
import * as ctrl from '../controllers/files';

const router = new Router();

router
  .get('/')
  .post('/', ctrl.filesUpload)

export default router.routes();