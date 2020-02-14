import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* getRequest() {
  try {
    const image = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
           .then(answer => answer.json())
           .then(res => res.message)
    })
    yield put({type: 'NEW_IMG', data: image})
  } catch(e) {
    console.error('ERROR!', e);
  }
}

export function* watchRequest() {
  yield takeEvery('GET_NEW_IMG', getRequest)
}

export default function* rootSaga() {
  yield all([
    getRequest,
    watchRequest()
  ])
}
