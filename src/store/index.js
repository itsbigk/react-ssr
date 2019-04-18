import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducer from './reducers'

export default initialState => {
  const { NODE_ENV } = process.env

  let DevTools
  if (NODE_ENV !== 'production') {
    DevTools = require('./DevTools').default
  }

  const middlewares = [
    promise,
    thunk
  ]

  if (NODE_ENV && NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const middleware = applyMiddleware(...middlewares)

  let enhancer
  if (NODE_ENV !== 'production') {
    enhancer = compose(
      middleware,
      DevTools.instrument()
    )
  }

  const store = createStore(
    rootReducer,
    initialState,
    (NODE_ENV === 'production'
      ? middleware
      : enhancer)
  )

  return store
}
