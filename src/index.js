import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker' 
import './index.css';
import reducer from './Store/reducers/peopleSearch'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'


const logger = store => {
  return next => {
    return action => {
      console.log("Dispatching", action)
      const result = next(action)
      console.log("next state", store.getState())
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

serviceWorker.register()
