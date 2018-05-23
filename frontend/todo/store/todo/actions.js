import types from '../types'

export default {
  [types.todo.FETCH]: todos => ({ type: types.todo.FETCH, todos }),

  [types.todo.NEW]: todos => ({ type: types.todo.NEW, todos }),

  [types.todo.UPDATE]: todo => ({ type: types.todo.UPDATE, todo }),

  [types.todo.DELETE]: id => ({ type: types.todo.DELETE, id }),

  [types.todo.ADD]: todo => ({ type: types.todo.ADD, todo }),

  [types.todo.FETCH_API]: (url = '') => ({ type: types.todo.FETCH_API, url }),

  [types.todo.ADD_API]: (text, url = '') => ({ type: types.todo.ADD_API, text, url }),

  [types.todo.UPDATE_API]: (todo, url = '') => ({ type: types.todo.UPDATE_API, todo, url }),

  [types.todo.DELETE_API]: (id, url = '') => ({ type: types.todo.DELETE_API, id, url })
}
