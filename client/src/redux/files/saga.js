import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import services from '../../services/services';

function* filesUpload (args) {
  console.log('test');
  
  try {
    yield put();
  } catch {
    yield put();
  }
};

export default function* filesSaga() {
  yield all([takeEvery(actions.FILES_UPLOAD, () => console.log('dfdf'))]);
}