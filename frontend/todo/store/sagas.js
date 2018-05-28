import { all } from 'redux-saga/effects'
import todo from './todo'
import api from './api'

export default function * () {
  yield all([
    ...todo.sagas,
    ...api.sagas
  ])
}
