import types from '../types'
import helper from '../helper'

const initialState = types.filter.SHOW_ALL

const actions = {
  [types.filter.SET]: filter => ({ type: types.filter.SET, filter })
}

const reducers = helper.createReducer(initialState, {
  [types.filter.SET]: (state, action) => action.filter
})

export default {
  actions,
  reducers
}
