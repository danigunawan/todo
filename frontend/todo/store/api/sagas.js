import { put, takeEvery } from 'redux-saga/effects'
import Fingerprint2 from 'fingerprintjs2'
import { randomBytes } from 'crypto'
import actions from './actions'
import types from '../types'
import todo from '../todo'
import api from './api'

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
  yield put(todo.actions[types.todo.API_FETCH]())
}

function * watchInitialize () {
  yield takeEvery(types.api.INITIALIZE, initialize)
}

function * watchGet () {
  yield takeEvery(types.api.GET, api.fetchGet)
}

function * watchPost () {
  yield takeEvery(types.api.POST, api.fetchPost)
}

function * watchPut () {
  yield takeEvery(types.api.PUT, api.fetchPut)
}

function * watchDelete () {
  yield takeEvery(types.api.DELETE, api.fetchDelete)
}

export default [ watchInitialize(), watchGet(), watchPost(), watchPut(), watchDelete() ]
