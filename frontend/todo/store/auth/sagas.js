import { put, takeEvery } from 'redux-saga/effects'
import Fingerprint2 from 'fingerprintjs2'
import actions from './actions'
import types from '../types'
import { randomBytes } from 'crypto'

function * initialize (action) {
  yield put(actions[types.uuid.SET_BROWSER_ID](window.navigator.userAgent))
  const { result } = yield new Promise(resolve => new Fingerprint2().get(result => resolve({ result })))
  yield put(actions[types.uuid.SET_FINGERPRINT_ID](result))
  yield put(actions[types.uuid.SET_SESSION_ID](randomBytes(16).toString('base64')))
}

function * watchInitialize () {
  yield takeEvery(types.uuid.INITIALIZE, initialize)
}

export default [ watchInitialize() ]
