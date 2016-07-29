import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import firebaseData from './firebaseData';
import counter from './counter';

const rootReducer = combineReducers({
  data: firebaseData,
  counter,
  routing: routerReducer,
});

export default rootReducer;
