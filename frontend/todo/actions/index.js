import types from 'todo/types'

const actions = {
  [types.todo.FETCH]: todos => ({ type: types.todo.FETCH, todos }),
  [types.todo.FETCH_API] () {
    return (dispatch) => {
      return window.fetch('/todos')
        .then(response => response.json())
        .then(json => dispatch(actions[types.todo.FETCH](json)))
    }
  },
  [types.todo.UPDATE]: todo => ({ type: types.todo.UPDATE, todo }),
  [types.todo.DELETE]: id => ({ type: types.todo.DELETE, id }),
  [types.todo.ADD]: (todo) => ({ type: types.todo.ADD, todo }),
  [types.todo.ADD_API] (text) {
    return (dispatch) => {
      return window.fetch('/todos', {
        method: 'post',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({text: text})
      })
        .then(response => response.json())
        .then(json => dispatch(actions[types.todo.ADD](json)))
    }
  },
  [types.todo.TOGGLE]: id => ({ type: types.todo.TOGGLE, id }),
  [types.filter.SET]: filter => ({ type: types.filter.SET, filter })
}

export default actions
