import types from 'todo/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.todo.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case types.todo.TOGGLE_TODO:
      return state.map((todo, index) => (index === action.index) ? ({ ...todo, completed: !todo.completed }) : todo)
    default:
      return state
  }
}
