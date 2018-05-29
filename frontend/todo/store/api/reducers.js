import { fromJS } from 'immutable'
import types from '../types'
import helper from '../helper'

const initialState = fromJS({
  host: '',
  sessionID: '',
  browserID: '',
  computerID: '',
  fingerprintID: '',
  userID: window.localStorage.getItem('user-email') || '',
  authToken: window.localStorage.getItem('user-token') || '',
  csrfToken: ''
})

export default helper.createReducer(initialState, {
  [types.api.SET_HOST]: (state, { host }) => state.set('host', host),

  [types.api.SET_SESSION_ID]: (state, { sessionID }) => state.set('sessionID', sessionID),

  [types.api.SET_BROWSER_ID]: (state, { browserID }) => state.set('browserID', browserID),

  [types.api.SET_COMPUTER_ID]: (state, { computerID }) => state.set('computerID', computerID),

  [types.api.SET_FINGERPRINT_ID]: (state, { fingerprintID }) => state.set('fingerprintID', fingerprintID),

  [types.api.SET_USER_ID]: (state, { userID }) => {
    window.localStorage.setItem('user-email', userID)
    return state.set('userID', userID)
  },

  [types.api.SET_AUTH_TOKEN]: (state, { authToken }) => {
    window.localStorage.setItem('user-token', authToken)
    return state.set('authToken', authToken)
  },

  [types.api.SET_CSRF_TOKEN]: (state, { csrfToken }) => state.set('csrfToken', csrfToken)
})
