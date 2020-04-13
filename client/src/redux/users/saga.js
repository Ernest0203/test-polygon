import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import service from '../../service/service';

function* signin ({ user }) {
  try {
    // const data = yield service.filesUpload(files);
    // yield put({type: actions.FETCH_DATA_SUCCESS, data: data.data});
  } catch {
    //yield put();
  }
};

function* signup ({ user }) {
  try {
    // const data = yield service.getFiles();
    // yield put({type: actions.FETCH_DATA_SUCCESS, data: data.data});
  } catch {
    //yield put();
  }
}

export default function* usersSaga() {
  yield all([
    takeEvery(actions.SIGNIN, signin),
    takeEvery(actions.SIGNUP, signup),
  ]);
}