/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import SubRedditPage from './containers/SubRedditPage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={SubRedditPage} />
    </Switch>
  </App>
);
