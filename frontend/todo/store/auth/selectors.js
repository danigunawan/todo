import { createSelector } from 'reselect'

const uuidState = state => state.uuid

const getSessionID = createSelector(uuidState, uuid => uuid.get('sessionID'))

const getBrowserID = createSelector(uuidState, uuid => uuid.get('browserID'))

const getComputerID = createSelector(uuidState, uuid => uuid.get('computerID'))

const getFingerprintID = createSelector(uuidState, uuid => uuid.get('fingerprintID'))

const getUserID = createSelector(uuidState, uuid => uuid.get('userID'))

const getAuthToken = createSelector(uuidState, uuid => uuid.get('authToken'))

const getUUID = createSelector(getFingerprintID, getComputerID, getSessionID, (fingerprint, computer, session) => fingerprint + computer + session)

const isAuth = createSelector(uuidState, uuid => !!uuid.get('authToken'))

export default {
  uuidState,
  getSessionID,
  getBrowserID,
  getComputerID,
  getFingerprintID,
  getUserID,
  getAuthToken,
  getUUID,
  isAuth
}
