import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import firebaseData from './firebaseData';
import counter from './counter';
import loginStatus from './loginStatus';

const rootReducer = combineReducers({
  data: firebaseData,
  counter,
  loginStatus,
  routing: routerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
