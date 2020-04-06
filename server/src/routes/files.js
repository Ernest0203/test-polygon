import Router from 'koa-router';
import multer from '@koa/multer';
import * as ctrl from '../controllers/files';

const router = new Router();

router
  .get('/', ctrl.getFiles)
  .get('/:name', ctrl.fileDownload)
  .post('/', ctrl.filesUpload)

export default router.routes();