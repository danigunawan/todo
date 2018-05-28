import { normalize } from 'normalizr'
import { put, takeEvery } from 'redux-saga/effects'
import actions from './actions'
import types from '../types'
import schema from './schema'
// import api from '../api'

function * apiFetch (action) {
  let response = yield window.fetch('/todos')
  // response.headers.forEach((a, b) => console.log(b, a))
  // yield put(api.actions[types.api.SET_COMPUTER_ID](response.headers.get('X-Client-IP')))
  let todos = yield response.json()
  let normalizedTodos = normalize(todos, schema)
  yield put(actions[types.todo.FETCH](normalizedTodos))
}

function * watchAPIFetch () {
  yield takeEvery(types.todo.API_FETCH, apiFetch)
}

function * apiAdd (action) {
  let response = yield window.fetch(`${action.url}/todos`, {
    method: 'post',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({text: action.text})
  })
  let todo = yield response.json()
  yield put(actions[types.todo.ADD](todo))
}

function * watchAPIAdd () {
  yield takeEvery(types.todo.API_ADD, apiAdd)
}

function * apiUpdate (action) {
  yield window.fetch(`${action.url}/todos/${action.todo.id}`, {
    method: 'put',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action.todo)
  })
  yield put(actions[types.todo.UPDATE](action.todo))
}

function * watchAPIUpdate () {
  yield takeEvery(types.todo.API_UPDATE, apiUpdate)
}

function * apiDelete (action) {
  yield window.fetch(`${action.url}/todos/${action.id}`, {
    method: 'delete',
    credentials: 'include'
  })
  yield put(actions[types.todo.DELETE](action.id))
}

function * watchAPIDelete () {
  yield takeEvery(types.todo.API_DELETE, apiDelete)
}

export default [ watchAPIFetch(), watchAPIAdd(), watchAPIUpdate(), watchAPIDelete() ]
