import { all } from 'redux-saga/effects';
import filesSaga from './files/saga';
import usersSaga from './users/saga';

export default function* rootSaga(getState) {
    yield all([
      filesSaga(),
      usersSaga()
    ]);
  }