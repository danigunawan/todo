import { fromJS } from 'immutable'
import constants from '../constants'
import helper from '../helper'
import types from './types'

const initialState = fromJS({
  filter: constants.SHOW_ALL
})

export default helper.createReducer(initialState, {
  [types.SET]: (state, { filter }) => state.set('filter', filter)
})
