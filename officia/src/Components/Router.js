import React, { useRef } from 'react';
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

export default () => {
  const ref = {
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
    ref6: useRef(null),
    ref7: useRef(null),
  };

  return (
    <Router>
      <ScrollToTop />
      <Header {...ref} />
      <Switch>
        <Route path='/' exact render={() => <Home {...ref} />} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </Router>
  );
};
