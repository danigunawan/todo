import { select } from 'redux-saga/effects'
import selectors from './selectors'

function * fetchGet ({ path }) {
  const host = yield select(selectors.getHost)
  const uuid = yield select(selectors.getUUID)
  const userID = yield select(selectors.getUserID)
  const authToken = yield select(selectors.getAuthToken)
  return window.fetch(`${host}${path}`, {
    headers: {
      uuid,
      'X-User-Email': userID,
      'X-User-Token': authToken
    }
  })
}

function * fetchPost ({ path, payload }) {
  const host = yield select(selectors.getHost)
  const uuid = yield select(selectors.getUUID)
  const userID = yield select(selectors.getUserID)
  const authToken = yield select(selectors.getAuthToken)
  return window.fetch(`${host}/${path}`, {
    method: 'post',
    credentials: 'include',
    headers: {
      uuid,
      'Content-Type': 'application/json',
      'X-User-Email': userID,
      'X-User-Token': authToken
    },
    body: JSON.stringify(payload)
  })
}

function * fetchPut ({ path, id, payload }) {
  const host = yield select(selectors.getHost)
  const uuid = yield select(selectors.getUUID)
  const userID = yield select(selectors.getUserID)
  const authToken = yield select(selectors.getAuthToken)
  return window.fetch(`${host}/${path}/${id}`, {
    method: 'put',
    credentials: 'include',
    headers: {
      uuid,
      'Content-Type': 'application/json',
      'X-User-Email': userID,
      'X-User-Token': authToken
    },
    body: JSON.stringify(payload)
  })
}

function * fetchDelete ({ path, id }) {
  const host = yield select(selectors.getHost)
  const uuid = yield select(selectors.getUUID)
  const userID = yield select(selectors.getUserID)
  const authToken = yield select(selectors.getAuthToken)
  return window.fetch(`${host}/${path}/${id}`, {
    method: 'delete',
    credentials: 'include',
    headers: {
      uuid,
      'Content-Type': 'application/json',
      'X-User-Email': userID,
      'X-User-Token': authToken
    }
  })
}

export default {
  fetchGet,
  fetchPost,
  fetchPut,
  fetchDelete
}
