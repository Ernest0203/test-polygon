import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import service from '../../service/service';

function* filesUpload ({ files }) {
  try {
    const data = yield service.filesUpload(files);
    //yield put();
  } catch {
    //yield put();
  }
};

export default function* filesSaga() {
  yield all([
    takeEvery(actions.FILES_UPLOAD, filesUpload)
  ]);
}