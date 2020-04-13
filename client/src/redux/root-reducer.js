import { combineReducers } from 'redux';
import files from './files/reducer';
import users from './users/reducer';

export default combineReducers({
  files,
  users
});
