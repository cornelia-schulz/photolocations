import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
import i18n from './i18n'
import {I18nextProvider} from 'react-i18next'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore (
  reducers,
  composeEnhancers (applyMiddleware (thunkMiddleware))
)

document.addEventListener ('DOMContentLoaded', () => {
  render (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>,
    document.getElementById ('app')
  )
})
