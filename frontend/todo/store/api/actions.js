import types from './types'

export default {
  [types.DELETE]: (path, id) => ({ type: types.DELETE, path, id }),

  [types.GET]: (path, headers) => ({ type: types.GET, path, headers }),

  [types.POST]: (path, payload) => ({ type: types.POST, path, payload }),

  [types.PUT]: (path, payload) => ({ type: types.PUT, path, payload }),

  [types.SET_HOST]: host => ({ type: types.SET_HOST, host })
}
