import { put, takeEvery } from 'redux-saga/effects'
// import Fingerprint2 from 'fingerprintjs2'
import api from '../api'
import auth from '../auth'
import todo from '../todo'
// import actions from './actions'
import types from './types'

function * initialize ({ host }) {
  // const { result } = yield new Promise(resolve => new Fingerprint2().get(result => resolve({ result })))
  // yield put(actions[types.SET_FINGERPRINT_ID](result))
  yield put(api.actions[api.types.SET_HOST](host))
  yield put(todo.actions[todo.types.API_FETCH]())
}

function * login ({ email, password }) {
  try {
    const fetch = yield api.fetchPost({ path: '/users/sign_in', payload: { email, password } })
    const response = yield fetch
    if (response.status !== 201) return console.log('error/unauthorized')
    const json = yield response.json()
    yield put(auth.actions[auth.types.SET_AUTH_ID](json.email))
    yield put(auth.actions[auth.types.SET_AUTH_TOKEN](json.authentication_token))
  } catch (e) {
    console.log('server error', e)
  }
}

function * watchInitialize () {
  yield takeEvery(types.INITIALIZE, initialize)
}

function * watchLogin () { yield takeEvery(types.LOGIN, login) }

export default [
  watchInitialize(),
  watchLogin()
]
