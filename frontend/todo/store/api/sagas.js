import { put, select, take, takeEvery } from 'redux-saga/effects'
import Fingerprint2 from 'fingerprintjs2'
import { randomBytes } from 'crypto'
import actions from './actions'
import types from '../types'
import todo from '../todo'
import selectors from './selectors'

const findIP = new Promise(resolve => {
  let rtc = new (window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection)({iceServers: []})
  let nop = () => {}
  rtc.createDataChannel('')
  rtc.createOffer(c => rtc.setLocalDescription(c, nop, nop), nop)
  rtc.onicecandidate = c => {
    try {
      c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(resolve)
    } catch (e) {}
  }
})

function * initialize ({ host, csrfToken }) {
  const { result } = yield new Promise(resolve => new Fingerprint2().get(result => resolve({ result })))
  yield put(actions[types.api.SET_FINGERPRINT_ID](result))
  yield put(actions[types.api.SET_HOST](host))
  yield put(actions[types.api.SET_CSRF_TOKEN](csrfToken))
  yield put(actions[types.api.SET_BROWSER_ID](window.navigator.userAgent))
  yield put(actions[types.api.SET_SESSION_ID](randomBytes(16).toString('base64')))
  yield put(actions[types.api.SET_COMPUTER_ID](yield findIP))
}

function * watchInitialize () {
  const action = yield take(types.api.INITIALIZE)
  yield initialize(action)
  yield put(todo.actions[types.todo.API_FETCH]())
}

function * fetchGet ({ path }) {
  const host = yield select(selectors.getHost)
  return window.fetch(`${host}/${path}`)
}

function * watchGet () {
  yield takeEvery(types.api.GET, fetchGet)
}

function * fetchPost ({ path, payload }) {
  const host = yield select(selectors.getHost)
  return window.fetch(`${host}/${path}`, {
    method: 'post',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
}

function * watchPost () {
  yield takeEvery(types.api.POST, fetchPost)
}

function * fetchPut ({ path, payload }) {
  const host = yield select(selectors.getHost)
  return window.fetch(`${host}/${path}`, {
    method: 'put',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
}

function * watchPut () {
  yield takeEvery(types.api.PUT, fetchPut)
}

function * fetchDelete ({ path, id }) {
  const host = yield select(selectors.getHost)
  return window.fetch(`${host}/${path}/${id}`, {
    method: 'delete',
    credentials: 'include'
  })
}

function * watchDelete () {
  yield takeEvery(types.api.DELETE, fetchDelete)
}

export default [ watchInitialize(), watchGet(), watchPost(), watchPut(), watchDelete() ]
