import types from '../types'

export default {
  [types.filter.SET]: filter => ({ type: types.filter.SET, filter })
}
