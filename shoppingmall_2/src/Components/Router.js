import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import History from 'Components/History';
import ScrollToTop from 'Components/ScrollToTop';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Home from 'Routes/Home';
import Shop from 'Routes/Shop';
import Brand from 'Routes/Brand';
import Search from 'Routes/Search';
import LogIn from 'Routes/LogIn';
import SignUp from 'Routes/SignUp';
import Detail from 'Routes/Detail';
import NotFound from 'Routes/NotFound';

export default () => {
  return (
    <Router>
      <History />
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/brand' exact component={Brand} />
        <Route path='/products/search' exact component={Search} />
        <Route path='/login' exact component={LogIn} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/products/:id' exact component={Detail} />
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
      <Footer />
    </Router>
  );
};
