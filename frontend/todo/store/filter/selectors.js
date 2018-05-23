import { createSelector } from 'reselect'

const filterState = state => state.filter

const getFilter = createSelector(filterState, filter => filter.get('filter'))

export default {
  filterState,
  getFilter
}
