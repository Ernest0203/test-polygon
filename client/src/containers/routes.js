import Files from './Files';
import Users from './Users';

const routes = [
  {
    path: 'files',
    component: Files
  },
  {
    path: 'users',
    component: Users
  },
];

const links = [
  'files',
  'users',
];

export { routes, links };