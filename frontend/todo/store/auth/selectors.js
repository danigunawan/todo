import { createSelector } from 'reselect'

const authState = state => state.auth

const getAuthID = createSelector(authState, api => api.get('authID'))

const getAuthToken = createSelector(authState, api => api.get('authToken'))

const getFingerprintID = createSelector(authState, api => api.get('fingerprintID'))

const getUUID = createSelector(authState, api => api.get('uuid'))

const isAuth = createSelector(getAuthID, getAuthToken, (authID, authToken) => !!authID && !!authToken)

export default {
  getAuthID,
  getAuthToken,
  getFingerprintID,
  getUUID,
  isAuth
}
