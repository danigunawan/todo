import { all } from 'redux-saga/effects'
import todo from './todo'
import uuid from './uuid'

export default function * () {
  yield all([
    ...todo.sagas,
    ...uuid.sagas
  ])
}
