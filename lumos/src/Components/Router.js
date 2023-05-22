import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ScrollToTop from 'Components/ScrollToTop';
import Home from 'Routes/Home';

export default () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
};
