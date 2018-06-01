import { all } from 'redux-saga/effects'
import api from './api'
import auth from './auth'
import todo from './todo'

export default function * () {
  yield all([
    ...api.sagas,
    ...auth.sagas,
    ...todo.sagas
  ])
}
