import { normalize } from 'normalizr'
import { put, select } from 'redux-saga/effects'
import api from '../api'
import auth from '../auth'
import actions from './actions'
import schema from './schema'
import types from './types'

function * apiFetch () {
  const fingerprint = yield select(auth.selectors.getFingerprintID)
  const fetch = yield api.fetchGet({ path: '/todos', headers: { 'X-Fingerprint': fingerprint } })
  const response = yield fetch
  yield put(auth.actions[auth.types.SET_UUID](response.headers.get('X-UUID')))
  if (response.status !== 200) return
  const todos = yield response.json()
  const normalizedTodos = normalize(todos, schema)
  yield put(actions[types.FETCH](normalizedTodos))
}

function * apiAdd ({ text }) {
  const fetch = yield api.fetchPost({ path: '/todos', payload: { text } })
  const response = yield fetch
  if (response.status !== 200) return
  const todo = yield response.json()
  yield put(actions[types.ADD](todo))
}

function * apiUpdate ({ todo }) {
  const fetch = yield api.fetchPut({ path: '/todos', id: todo.id, payload: todo })
  const response = yield fetch
  if (response.status !== 204) return
  yield put(actions[types.UPDATE](todo))
}

function * apiDelete ({ id }) {
  const fetch = yield api.fetchDelete({ path: '/todos', id })
  const response = yield fetch
  if (response.status !== 204) return
  yield put(actions[types.DELETE](id))
}

export default {
  apiFetch,
  apiAdd,
  apiUpdate,
  apiDelete
}
