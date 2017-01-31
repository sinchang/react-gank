import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/home';
import History from './components/history';
import Category from './components/category';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Home} />
        <Route path="/day/:day" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/category/:type" component={Category}/>
    </Router>
);
export default Routes;