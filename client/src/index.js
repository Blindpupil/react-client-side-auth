import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Sign_up from './components/authentication/Signup';
import Feature from './components/Feature';
import Sign_out from './components/authentication/Signout';
import Sign_in from './components/authentication/Signin';

const store = createStore(
  reducers,
  // Remember, this second argument is the default state
  {
    auth: {authenticated: localStorage.getItem('token')}
  },
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Sign_up} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signout" exact component={Sign_out} />
        <Route path="/signin" exact component={Sign_in} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

