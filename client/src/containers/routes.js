import Files from './Files';
import Users from './Users';
import Sockets from './Sockets';

const routes = [
  {
    link: 'files',
    path: 'files',
    component: Files
  },
  {
    link: 'sockets',
    path: 'sockets',
    component: Sockets
  },
  // {
    // link: 'users',
  //   path: 'users',
  //   component: Users
  // },
];

export default routes;