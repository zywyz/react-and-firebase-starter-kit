import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MainApp from './MainApp.jsx';

import Subpage from './pages/subpage/Subpage';
import Homepage from './pages/homepage/Homepage';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./reducers/index');
    store.replaceReducer(nextRootReducer);
  });
}

const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={MainApp}>
        <IndexRoute component={Homepage} />
        <Route path="subpage" component={Subpage} />
      </Route>
    </Router>
  </Provider>
);

export default App;
