import fs from 'fs';

export async function filesUpload(ctx) {
  const files = ctx.request.files;
  await Promise.all(Object.keys(files).map(item => {
    fs.copyFile(files[item].path, `./files/${files[item].name}`, err => err)
  }));
  ctx.body = 201;
}