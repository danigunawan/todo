import types from '../types'

export default {
  [types.uuid.INITIALIZE]: () => ({ type: types.uuid.INITIALIZE }),

  [types.uuid.SET_SESSION_ID]: sessionID => ({ type: types.uuid.SET_SESSION_ID, sessionID }),

  [types.uuid.SET_BROWSER_ID]: browserID => ({ type: types.uuid.SET_BROWSER_ID, browserID }),

  [types.uuid.SET_COMPUTER_ID]: computerID => ({ type: types.uuid.SET_COMPUTER_ID, computerID }),

  [types.uuid.SET_FINGERPRINT_ID]: fingerprintID => ({ type: types.uuid.SET_FINGERPRINT_ID, fingerprintID }),

  [types.uuid.SET_USER_ID]: userID => ({ type: types.uuid.SET_USER_ID, userID }),

  [types.uuid.SET_AUTH_TOKEN]: authToken => ({ type: types.uuid.SET_AUTH_TOKEN, authToken })
}
