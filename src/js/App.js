import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MainApp from './MainApp.jsx';

import Homepage from './pages/homepage/Homepage';
import Subpage from './pages/subpage/Subpage';
import Restricted from './pages/restricted/Restricted';

import { Provider } from 'react-redux';
import store from './reducers/index';

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
        <Route path="restricted" component={Restricted} />
      </Route>
    </Router>
  </Provider>
);

export default App;
