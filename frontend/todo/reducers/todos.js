import types from 'todo/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case types.TOGGLE_TODO:
      return state.map((todo, index) => (index === action.index) ? ({ ...todo, completed: !todo.completed }) : todo)
    default:
      return state
  }
}
