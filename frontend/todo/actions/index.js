import types from 'todo/types'

export default {
  addTodo: text => ({ type: types.todo.ADD_TODO, text }),
  toggleTodo: index => ({ type: types.todo.TOGGLE_TODO, index }),
  setFilter: filter => ({ type: types.filter.SET_FILTER, filter })
}
