import types from 'todo/types'

export default {
  addTodo: text => ({ type: types.ADD_TODO, text }),
  toggleTodo: index => ({ type: types.TOGGLE_TODO, index }),
  setVisibilityFilter: filter => ({ type: types.SET_VISIBILITY_FILTER, filter })
}
