import { select } from 'redux-saga/effects'
import selectors from './selectors'
import auth from '../auth'

function * combineHeaders () {
  return {
    'Content-Type': 'application/json',
    'X-UUID': yield select(auth.selectors.getUUID),
    'X-User-Email': yield select(auth.selectors.getAuthID),
    'X-User-Token': yield select(auth.selectors.getAuthToken)
  }
}

function * fetchGet ({ path, headers }) {
  const host = yield select(selectors.getHost)
  const authHeaders = yield combineHeaders()
  return window.fetch(`${host}${path}`, {
    headers: {
      ...authHeaders,
      ...headers
    }
  })
}

function * fetchPost ({ path, payload }) {
  const host = yield select(selectors.getHost)
  return window.fetch(`${host}${path}`, {
    method: 'post',
    credentials: 'include',
    headers: yield combineHeaders(),
    body: JSON.stringify(payload)
  })
}

function * fetchPut ({ path, id, payload }) {
  const host = yield select(selectors.getHost)
  return window.fetch(`${host}${path}/${id}`, {
    method: 'put',
    credentials: 'include',
    headers: yield combineHeaders(),
    body: JSON.stringify(payload)
  })
}

function * fetchDelete ({ path, id }) {
  const host = yield select(selectors.getHost)
  return window.fetch(`${host}${path}/${id}`, {
    method: 'delete',
    credentials: 'include',
    headers: yield combineHeaders()
  })
}

export default {
  fetchGet,
  fetchPost,
  fetchPut,
  fetchDelete
}
