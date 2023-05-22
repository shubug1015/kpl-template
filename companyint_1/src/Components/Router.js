import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Home from 'Routes/Home';
import AboutUs from 'Routes/AboutUs';
import Contact from 'Routes/Contact';

import QnA from 'Routes/QnA';
import SuccessionDetail from 'Routes/SuccessionDetail';

export default () => {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/aboutus' exact component={AboutUs} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/qna' exact component={QnA} />
      <Route path='/succession/:id' exact component={SuccessionDetail} />
      <Footer />
    </Router>
  );
};
