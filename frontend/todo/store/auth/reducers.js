import { fromJS } from 'immutable'
import types from './types'
import helper from '../helper'

const initialState = fromJS({
  authID: window.localStorage.getItem('user-email') || '',
  authToken: window.localStorage.getItem('user-token') || '',
  fingerprintID: '',
  uuid: window.localStorage.getItem('user-uuid') || ''
})

export default helper.createReducer(initialState, {
  [types.SET_AUTH_ID]: (state, { authID }) => {
    window.localStorage.setItem('user-email', authID)
    return state.set('authID', authID)
  },

  [types.SET_AUTH_TOKEN]: (state, { authToken }) => {
    window.localStorage.setItem('user-token', authToken)
    return state.set('authToken', authToken)
  },

  [types.SET_FINGERPRINT_ID]: (state, { fingerprintID }) => state.set('fingerprintID', fingerprintID),

  [types.SET_UUID]: (state, { uuid }) => {
    window.localStorage.setItem('user-uuid', uuid)
    return state.set('uuid', uuid)
  }
})
