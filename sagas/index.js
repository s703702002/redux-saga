import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* helloSaga(){
    console.log('hello saga! 我會再3秒後 + 1');
    yield call(delay, 3000)
    yield put({type: 'INCREMENT'})
}

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
}

export default function* watchIncrementAsync() {
    yield takeEvery('HELLO_SAGA', helloSaga)
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// export default function* rootSaga() {
//     yield all([
//         helloSaga(),
//         watchIncrementAsync()
//     ])
// }