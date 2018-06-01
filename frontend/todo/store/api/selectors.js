import { createSelector } from 'reselect'

const apiState = state => state.api

const getHost = createSelector(apiState, api => api.get('host'))

export default {
  getHost
}
