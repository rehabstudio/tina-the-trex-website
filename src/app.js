import React from 'react';
import ReactDOM from 'react-dom';

import { SERVER_USER_NAME, INTRO_MESSAGE } from 'constants/app';
import configureStore from './stores/configureStore';
import * as actions from 'actions';
import { Provider } from 'react-redux';

import 'normalize.css';
import './app.css';

import App from 'containers/App/App';

import { browserHistory } from 'react-router';
import makeRoutes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';

const routes = makeRoutes();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

setTimeout(() => {
  store.dispatch(
    actions.receiveMessage({
      id: 'm_' + Date.now(),
      text: INTRO_MESSAGE,
      sender: SERVER_USER_NAME
    })
  );
}, 1500);

ReactDOM.render(
  <Provider store={store}>
    <App history={history}
      routes={routes} />
  </Provider>,
  document.querySelector('#root')
);
