import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';

import './css/gank.css';
import './css/bootstrap.css';

ReactDOM.render(
  <Routes history = {browserHistory} />,
  document.getElementById('root')
);