import types from './types'

export default {
  [types.ADD]: todo => ({ type: types.ADD, todo }),

  [types.API_ADD]: text => ({ type: types.API_ADD, text }),

  [types.API_DELETE]: id => ({ type: types.API_DELETE, id }),

  [types.API_FETCH]: () => ({ type: types.API_FETCH }),

  [types.API_UPDATE]: todo => ({ type: types.API_UPDATE, todo }),

  [types.DELETE]: id => ({ type: types.DELETE, id }),

  [types.FETCH]: todos => ({ type: types.FETCH, todos }),

  [types.NEW]: todos => ({ type: types.NEW, todos }),

  [types.SET_TEXT]: text => ({ type: types.SET_TEXT, text }),

  [types.UPDATE]: todo => ({ type: types.UPDATE, todo })
}
