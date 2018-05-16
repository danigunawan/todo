import types from '../types'
import helper from '../helper'
import constants from '../constants'

const initialState = constants.SHOW_ALL

const reducers = helper.createReducer(initialState, {
  [types.filter.SET]: (state, action) => action.filter
})

const actions = {
  [types.filter.SET]: filter => ({ type: types.filter.SET, filter })
}

export default {
  actions,
  reducers
}
