import types from 'todo/types'

const actions = {
  [types.todo.FETCH]: todos => ({ type: types.todo.FETCH, todos }),
  [types.todo.FETCH_ALL]: () => {
    return (dispatch) => {
      return window.fetch('/todos')
        .then(response => response.json())
        .then(json => dispatch(actions[types.todo.FETCH](json)))
    }
  },
  [types.todo.UPDATE]: todo => ({ type: types.todo.UPDATE, todo }),
  [types.todo.DELETE]: id => ({ type: types.todo.DELETE, id }),
  [types.todo.ADD]: text => ({ type: types.todo.ADD, text }),
  [types.todo.TOGGLE]: id => ({ type: types.todo.TOGGLE, id }),
  [types.filter.SET]: filter => ({ type: types.filter.SET, filter })
}

export default actions
