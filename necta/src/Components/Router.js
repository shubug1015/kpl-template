import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ScrollToTop from 'Components/ScrollToTop';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Home from 'Routes/Home';
import Subscribe from 'Routes/Subscribe';
import Login from 'Routes/Login';

export default () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/subscribe' exact component={Subscribe} />
        <Route path='/login' exact component={Login} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </Router>
  );
};
