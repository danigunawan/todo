import types from '../types'

export default {
  [types.todo.SET_TEXT]: text => ({ type: types.todo.SET_TEXT, text }),

  [types.todo.FETCH]: todos => ({ type: types.todo.FETCH, todos }),

  [types.todo.NEW]: todos => ({ type: types.todo.NEW, todos }),

  [types.todo.UPDATE]: todo => ({ type: types.todo.UPDATE, todo }),

  [types.todo.DELETE]: id => ({ type: types.todo.DELETE, id }),

  [types.todo.ADD]: todo => ({ type: types.todo.ADD, todo }),

  [types.todo.API_FETCH]: () => ({ type: types.todo.API_FETCH }),

  [types.todo.API_ADD]: text => ({ type: types.todo.API_ADD, text }),

  [types.todo.API_UPDATE]: todo => ({ type: types.todo.API_UPDATE, todo }),

  [types.todo.API_DELETE]: id => ({ type: types.todo.API_DELETE, id })
}
