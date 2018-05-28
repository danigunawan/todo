import { createSelector } from 'reselect'

const apiState = state => state.api

const getHost = createSelector(apiState, api => api.get('host'))

const getSessionID = createSelector(apiState, api => api.get('sessionID'))

const getBrowserID = createSelector(apiState, api => api.get('browserID'))

const getComputerID = createSelector(apiState, api => api.get('computerID'))

const getFingerprintID = createSelector(apiState, api => api.get('fingerprintID'))

const getUserID = createSelector(apiState, api => api.get('userID'))

const getAuthToken = createSelector(apiState, api => api.get('authToken'))

const getCSRFToken = createSelector(apiState, api => api.get('csrfToken'))

const getUUID = createSelector(getFingerprintID, getComputerID, getSessionID, (fingerprint, computer, session) => `${fingerprint}|${computer}|${session}`)

const isAuth = createSelector(apiState, api => !!api.get('authToken'))

export default {
  apiState,
  getHost,
  getSessionID,
  getBrowserID,
  getComputerID,
  getFingerprintID,
  getUserID,
  getAuthToken,
  getCSRFToken,
  getUUID,
  isAuth
}
