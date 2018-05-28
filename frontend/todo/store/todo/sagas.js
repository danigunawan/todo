import { takeEvery } from 'redux-saga/effects'
import types from '../types'
import api from './api'

function * watchAPIFetch () {
  yield takeEvery(types.todo.API_FETCH, api.apiFetch)
}

function * watchAPIAdd () {
  yield takeEvery(types.todo.API_ADD, api.apiAdd)
}

function * watchAPIUpdate () {
  yield takeEvery(types.todo.API_UPDATE, api.apiUpdate)
}

function * watchAPIDelete () {
  yield takeEvery(types.todo.API_DELETE, api.apiDelete)
}

export default [ watchAPIFetch(), watchAPIAdd(), watchAPIUpdate(), watchAPIDelete() ]
