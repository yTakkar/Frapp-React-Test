import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import Items from './reducers/item-r'

const reduers = combineReducers({
  Items
})

const middlewares = applyMiddleware(promise(), thunk, logger)

export default createStore(
  reduers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middlewares
)
