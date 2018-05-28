import actions from './actions'
import reducers from './reducers'
import sagas from './sagas'
import selectors from './selectors'
import api from './api'

export default {
  ...api,
  actions,
  selectors,
  reducers,
  sagas
}
