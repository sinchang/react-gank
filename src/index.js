import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import Router from './router';

import './css/gank.css';
import './css/bootstrap.css';

ReactDOM.render(
  <Router history={hashHistory} />,
  document.getElementById('root')
);
