import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ScrollToTop from 'Components/ScrollToTop';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import Build from 'Routes/Build';
import User from 'Routes/User';
import Footer from 'Components/Footer';

export default () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/build' exact component={Build} />
        <Route path='/user' exact component={User} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </Router>
  );
};
