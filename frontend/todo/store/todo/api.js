import { normalize } from 'normalizr'
import { put } from 'redux-saga/effects'
import api from '../api'
import types from '../types'
import actions from './actions'
import schema from './schema'

function * apiFetch (action) {
  const fetch = yield api.fetchGet({ path: '/todos' })
  const response = yield fetch
  if (response.status !== 200) return
  const todos = yield response.json()
  const normalizedTodos = normalize(todos, schema)
  yield put(actions[types.todo.FETCH](normalizedTodos))
}

function * apiAdd (action) {
  const fetch = yield api.fetchPost({ path: '/todos', payload: { text: action.text } })
  const response = yield fetch
  if (response.status !== 200) return
  const todo = yield response.json()
  yield put(actions[types.todo.ADD](todo))
}

function * apiUpdate (action) {
  const fetch = yield api.fetchPut({ path: '/todos', id: action.todo.id, payload: action.todo })
  const response = yield fetch
  if (response.status !== 204) return
  yield put(actions[types.todo.UPDATE](action.todo))
}

function * apiDelete (action) {
  const fetch = yield api.fetchDelete({ path: '/todos', id: action.id })
  const response = yield fetch
  if (response.status !== 204) return
  yield put(actions[types.todo.DELETE](action.id))
}

export default {
  apiFetch,
  apiAdd,
  apiUpdate,
  apiDelete
}
