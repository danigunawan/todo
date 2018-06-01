import types from './types'

export default {
  [types.INITIALIZE]: (host = '') => ({ type: types.INITIALIZE, host }),

  [types.LOGIN]: (email, password) => ({ type: types.LOGIN, email, password }),

  [types.SET_AUTH_ID]: authID => ({ type: types.SET_AUTH_ID, authID }),

  [types.SET_AUTH_TOKEN]: authToken => ({ type: types.SET_AUTH_TOKEN, authToken }),

  [types.SET_FINGERPRINT_ID]: fingerprintID => ({ type: types.SET_FINGERPRINT_ID, fingerprintID }),

  [types.SET_UUID]: uuid => ({ type: types.SET_UUID, uuid })
}
