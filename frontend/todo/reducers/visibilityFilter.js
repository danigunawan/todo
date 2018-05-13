import types from 'todo/types'

export default (state = types.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
