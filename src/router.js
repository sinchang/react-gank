import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from './components/Home';
import History from './components/History';
import Category from './components/Category';
import App from './components/App'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="/day/:day" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/category/:type" component={Category} />
    </Route>
  </Router>
);
export default Routes;
