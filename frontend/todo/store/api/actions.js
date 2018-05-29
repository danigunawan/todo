import types from '../types'

export default {
  [types.api.INITIALIZE]: (host = '', csrfToken = '') => ({ type: types.api.INITIALIZE, host, csrfToken }),

  [types.api.SET_HOST]: host => ({ type: types.api.SET_HOST, host }),

  [types.api.SET_SESSION_ID]: sessionID => ({ type: types.api.SET_SESSION_ID, sessionID }),

  [types.api.SET_BROWSER_ID]: browserID => ({ type: types.api.SET_BROWSER_ID, browserID }),

  [types.api.SET_COMPUTER_ID]: computerID => ({ type: types.api.SET_COMPUTER_ID, computerID }),

  [types.api.SET_FINGERPRINT_ID]: fingerprintID => ({ type: types.api.SET_FINGERPRINT_ID, fingerprintID }),

  [types.api.SET_USER_ID]: userID => ({ type: types.api.SET_USER_ID, userID }),

  [types.api.SET_AUTH_TOKEN]: authToken => ({ type: types.api.SET_AUTH_TOKEN, authToken }),

  [types.api.SET_CSRF_TOKEN]: csrfToken => ({ type: types.api.SET_CSRF_TOKEN, csrfToken }),

  [types.api.GET]: path => ({ type: types.api.GET, path }),

  [types.api.POST]: (path, payload) => ({ type: types.api.POST, path, payload }),

  [types.api.PUT]: (path, payload) => ({ type: types.api.PUT, path, payload }),

  [types.api.DELETE]: (path, id) => ({ type: types.api.DELETE, path, id }),

  [types.api.LOGIN]: (email, password) => ({ type: types.api.LOGIN, email, password })
}
