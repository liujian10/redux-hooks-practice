import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './components/App'
import Todos from './components/Todos'
import { reducers, initState } from './reducers/index'

console.log(reducers, initState)
const store = createStore(combineReducers(reducers), initState)

render(
  <Provider store={store}>
    <App />
    <Todos />
  </Provider>,
  document.getElementById('root'),
)