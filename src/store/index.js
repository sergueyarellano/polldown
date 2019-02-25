import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { logger } from 'redux-logger'

let middlewares = []
middlewares.push(logger)

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

export default store
