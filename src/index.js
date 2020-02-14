import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import Reducer from './redux/reducer'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/sagas.js'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)


  ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,

    document.getElementById('root')
  )
