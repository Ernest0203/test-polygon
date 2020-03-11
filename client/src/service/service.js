import Api from './api';

export default {
  filesUpload: data => {
    const api = new Api();
    return api.query('post', `files`, data);
  },

  // get: () => {
  //   const api = new Api();
  //   return api.query('get', `apiUrl`, data);
  // },
  // post: () => {
  //   const api = new Api();
  //   return api.query('post', `apiUrl`, data);
  // },
  // put: () => {
  //   const api = new Api();
  //   return api.query('put', `apiUrl`, data);
  // },
  // delete: () => {
  //   const api = new Api();
  //   return api.query('delete', `apiUrl`, data);
  // },
};
