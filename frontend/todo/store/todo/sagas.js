import { normalize } from 'normalizr'
import { put, takeEvery } from 'redux-saga/effects'
import actions from './actions'
import types from '../types'
import schema from './schema'
import uuid from '../uuid'

function * fetchApi (action) {
  let response = yield window.fetch(`${action.url}/todos`)
  response.headers.forEach((a, b) => console.log(b, a))
  yield put(uuid.actions[types.uuid.SET_COMPUTER_ID](response.headers.get('X-Client-IP')))
  let todos = yield response.json()
  let normalizedTodos = normalize(todos, schema)
  yield put(actions[types.todo.FETCH](normalizedTodos))
}

function * watchFetchApi () {
  yield takeEvery(types.todo.FETCH_API, fetchApi)
}

function * addApi (action) {
  let response = yield window.fetch(`${action.url}/todos`, {
    method: 'post',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({text: action.text})
  })
  let todo = yield response.json()
  yield put(actions[types.todo.ADD](todo))
}

function * watchAddApi () {
  yield takeEvery(types.todo.ADD_API, addApi)
}

function * updateApi (action) {
  yield window.fetch(`${action.url}/todos/${action.todo.id}`, {
    method: 'put',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action.todo)
  })
  yield put(actions[types.todo.UPDATE](action.todo))
}

function * watchUpdateApi () {
  yield takeEvery(types.todo.UPDATE_API, updateApi)
}

function * deleteApi (action) {
  yield window.fetch(`${action.url}/todos/${action.id}`, {
    method: 'delete',
    credentials: 'include'
  })
  yield put(actions[types.todo.DELETE](action.id))
}

function * watchDeleteApi () {
  yield takeEvery(types.todo.DELETE_API, deleteApi)
}

export default [ watchFetchApi(), watchAddApi(), watchUpdateApi(), watchDeleteApi() ]
