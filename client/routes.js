import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Main from './components/main';
import Welcome from './components/welcome'
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import RequreAuth from './components/auth/require_auth';
import Feature from './components/feature';
import NotFound from './components/misc/not_found';

export default (
  <Route component={App}>
    <Route path="/" component={Main}>
      <IndexRoute component={Welcome} />
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
      <Route path="signout" component={Signout} />
      <Route path="feature" component={RequreAuth(Feature)} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
