import { fromJS } from 'immutable'
import types from '../types'
import helper from '../helper'

const initialState = fromJS({
  sessionID: '',
  browserID: '',
  computerID: '',
  fingerprintID: '',
  userID: '',
  authToken: ''
})

export default helper.createReducer(initialState, {
  [types.uuid.SET_SESSION_ID]: (state, { sessionID }) => state.set('sessionID', sessionID),

  [types.uuid.SET_BROWSER_ID]: (state, { browserID }) => state.set('browserID', browserID),

  [types.uuid.SET_COMPUTER_ID]: (state, { computerID }) => state.set('computerID', computerID),

  [types.uuid.SET_FINGERPRINT_ID]: (state, { fingerprintID }) => state.set('fingerprintID', fingerprintID),

  [types.uuid.SET_USER_ID]: (state, { userID }) => state.set('userID', userID),

  [types.uuid.SET_AUTH_TOKEN]: (state, { authToken }) => state.set('authToken', authToken)
})
