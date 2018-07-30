import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';
import Sign_up from './components/authentication/Signup';

ReactDom.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" exact component={Sign_up} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

