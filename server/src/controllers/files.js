import fs from 'fs';
import config from 'config';

const HOST = config.get('server.host');
const PORT = config.get('server.port');
const folder = './resources/';

export async function filesUpload(ctx) {
  const files = ctx.request.files;
  await Promise.all(Object.keys(files).map(item => {
    fs.copyFileSync(files[item].path, `${folder}${files[item].name}`);
  }))
    .then(res => getFiles(ctx));
}

export async function fileDownload(ctx) {
  const fileName = `${folder}${ctx.params.name}`;
  ctx.body = fs.createReadStream(fileName);
  ctx.attachment(fileName);
}

export async function getFiles(ctx) {
  const files = fs.readdirSync(folder).map((item) => {
    return { name: item, url: `${HOST}:${PORT}/files/${item}` };
  });
  ctx.body = files;
}