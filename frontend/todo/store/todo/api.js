import { normalize } from 'normalizr'
import { put } from 'redux-saga/effects'
import api from '../api'
import types from '../types'
import actions from './actions'
import schema from './schema'

function * apiFetch () {
  const fetch = yield api.fetchGet({ path: '/todos' })
  const response = yield fetch
  yield put(api.actions[types.api.SET_COMPUTER_ID](response.headers.get('X-Client-IP')))
  if (response.status !== 200) return
  const todos = yield response.json()
  const normalizedTodos = normalize(todos, schema)
  yield put(actions[types.todo.FETCH](normalizedTodos))
}

function * apiAdd ({ text }) {
  const fetch = yield api.fetchPost({ path: '/todos', payload: { text } })
  const response = yield fetch
  if (response.status !== 200) return
  const todo = yield response.json()
  yield put(actions[types.todo.ADD](todo))
}

function * apiUpdate ({ todo }) {
  const fetch = yield api.fetchPut({ path: '/todos', id: todo.id, payload: todo })
  const response = yield fetch
  if (response.status !== 204) return
  yield put(actions[types.todo.UPDATE](todo))
}

function * apiDelete ({ id }) {
  const fetch = yield api.fetchDelete({ path: '/todos', id })
  const response = yield fetch
  if (response.status !== 204) return
  yield put(actions[types.todo.DELETE](id))
}

export default {
  apiFetch,
  apiAdd,
  apiUpdate,
  apiDelete
}
