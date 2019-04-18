import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { loadableReady } from '@loadable/component'
import createStore from 'store'
import Router from 'router'

import 'styles/index.scss'

const rootElement = document.getElementById('root')

const initialState = window.__INITIAL_STATE__

delete window.__INITIAL_STATE__

const store = createStore(initialState)

loadableReady(() => {
  hydrate(
    <Provider store={store}>
      <Router />
    </Provider>,
    rootElement
  )
})
