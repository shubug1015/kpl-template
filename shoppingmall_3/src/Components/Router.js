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
import Home from 'Routes/Home';
import Shop from 'Routes/Shop';
import LookBook from 'Routes/LookBook';
import About from 'Routes/About';
import Search from 'Routes/Search';
import Login from 'Routes/Login';
import SignUp from 'Routes/SignUp';
import Detail from 'Routes/Detail';
import Footer from 'Components/Footer';
import NotFound from 'Routes/NotFound';

export default () => {
  return (
    <Router>
      <History />
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/shop' exact component={Shop} />
        <Route path='/lookbook' exact component={LookBook} />
        <Route path='/about' exact component={About} />
        <Route path='/products/search' exact component={Search} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/products/:id' exact component={Detail} /> */}
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
      <Footer />
    </Router>
  );
};
