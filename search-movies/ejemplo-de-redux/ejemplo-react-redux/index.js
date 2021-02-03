import React from 'react'
import { render } from 'react-dom'
import CounterContainer from './containers/Counter'

import { counterApp } from './reducers'
import { createStore } from 'redux'

import { Provider } from 'react-redux'

const store = createStore(counterApp)

render (
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById('root')
)