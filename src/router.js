import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from './components/home';
import History from './components/history';
import Category from './components/category';
import App from './components/App'

const Router = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="/day/:day" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/category/:type" component={Category} />
    </Route>
  </Router>
);
export default Router;
