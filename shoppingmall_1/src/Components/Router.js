import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import History from 'Components/History';
import ScrollToTop from 'Components/ScrollToTop';
import Header from 'Components/Header/Header';
import Home from 'Routes/Home';
import Popup from 'Routes/Popup';
import NaverPopup from 'Routes/NaverPopup';
import Shop from 'Routes/Shop';
import Collection from 'Routes/Collection';
import LookBook from 'Routes/LookBook';
import Magazine from 'Routes/Magazine';
import Search from 'Routes/Search';
import Login from 'Routes/Login';
import SignUp from 'Routes/SignUp';
import MyPage from 'Routes/MyPage';
import Review from 'Routes/Review';
import NotFound from 'Routes/NotFound';
import QnA from 'Routes/QnA';
import Purchase from 'Routes/Purchase';
import Exchange from 'Routes/Exchange';
import Refund from 'Routes/Refund';
import Detail from 'Routes/Detail';
import Footer from 'Components/Footer';
import { connect } from 'react-redux';

const Router = ({ logged }) => {
  const LogoutRoute = (props) =>
    logged ? <Redirect to='/' /> : <Route {...props} />;

  const LoginRoute = (props) =>
    logged ? <Route {...props} /> : <Redirect to='/' />;

  return (
    <BrowserRouter>
      <History />
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <LogoutRoute path='/signup' exact component={NotFound} />
        {/* <Route path='/popup' exact component={Popup} />
        <LogoutRoute path='/signup' exact component={SignUp} />
        <LogoutRoute path='/login' exact component={Login} />
        <Route path='/naver_login' exact component={NaverPopup} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/collection' exact component={Collection} />
        <Route path='/lookbook' exact component={LookBook} />
        <Route path='/magazine' exact component={Magazine} />
        <Route path='/products/search' exact component={Search} />
        <LoginRoute path='/mypage' exact component={MyPage} />
        <Route path='/review' exact component={Review} />
        <Route path='/qna' exact component={QnA} />
        <LoginRoute path='/purchase' exact component={Purchase} />
        <LoginRoute path='/exchange' exact component={Exchange} />
        <LoginRoute path='/refund' exact component={Refund} />
        <Route path='/products/:id' exact component={Detail} /> */}
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

export default connect(mapStateToProps, null)(Router);
