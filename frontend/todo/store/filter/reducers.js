import { fromJS } from 'immutable'
import types from '../types'
import helper from '../helper'
import constants from '../constants'

const initialState = fromJS({
  filter: constants.SHOW_ALL
})

export default helper.createReducer(initialState, {
  [types.filter.SET]: (state, { filter }) => state.set('filter', filter)
})
