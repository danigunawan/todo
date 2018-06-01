import actions from './actions'
import api from './api'
import reducers from './reducers'
import sagas from './sagas'
import selectors from './selectors'
import types from './types'

export default {
  actions,
  ...api,
  reducers,
  sagas,
  selectors,
  types
}
