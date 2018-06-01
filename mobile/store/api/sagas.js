import { takeEvery } from 'redux-saga/effects'
import types from './types'
import api from './api'

function * watchGet () { yield takeEvery(types.GET, api.fetchGet) }

function * watchDelete () { yield takeEvery(types.DELETE, api.fetchDelete) }

function * watchPost () { yield takeEvery(types.POST, api.fetchPost) }

function * watchPut () { yield takeEvery(types.PUT, api.fetchPut) }

export default [
  watchGet(),
  watchDelete(),
  watchPost(),
  watchPut()
]
