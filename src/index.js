import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './components/App'
import Todos from './components/Todos'
import { reducers, initState } from './reducers/index'

const store = createStore(combineReducers(reducers), initState)

render(
  <Provider store={store}>
    <Todos />
    <App />
  </Provider>,
  document.getElementById('root'),
)