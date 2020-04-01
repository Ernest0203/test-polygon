import Router from 'koa-router';
import multer from '@koa/multer';
import * as ctrl from '../controllers/files';

const router = new Router();
//const upload = multer();

router
  .get('/')
  .post('/', ctrl.filesUpload)
  // .post('/', /*upload.fields([{
  //   name: 'avatar',
  //   maxCount: 1
  // },]),*/ ctx => {console.log(ctx.request.files)})

export default router.routes();