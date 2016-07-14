import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import messages from './messages';

export default combineReducers({
  messages,
  routing: routerReducer
});
