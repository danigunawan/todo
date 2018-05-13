import types from 'todo/types'

export default (state = types.filter.SHOW_ALL, action) => {
  switch (action.type) {
    case types.filter.SET_FILTER:
      return action.filter
    default:
      return state
  }
}
