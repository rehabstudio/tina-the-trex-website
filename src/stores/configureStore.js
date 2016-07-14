import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk, router, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
