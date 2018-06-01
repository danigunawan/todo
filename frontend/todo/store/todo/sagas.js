import { takeEvery } from 'redux-saga/effects'
import types from './types'
import api from './api'

function * watchAPIAdd () {
  yield takeEvery(types.API_ADD, api.apiAdd)
}

function * watchAPIDelete () {
  yield takeEvery(types.API_DELETE, api.apiDelete)
}

function * watchAPIFetch () {
  yield takeEvery(types.API_FETCH, api.apiFetch)
}

function * watchAPIUpdate () {
  yield takeEvery(types.API_UPDATE, api.apiUpdate)
}

export default [
  watchAPIAdd(),
  watchAPIDelete(),
  watchAPIFetch(),
  watchAPIUpdate()
]
