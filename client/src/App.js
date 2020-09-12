import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignInPage from './pages/SignInPage/SignInPage.component';
import OtpPage from './pages/OtpPage/OtpPage.component';
import SuccessPage from './pages/SuccessPage/SuccessPage.component';
import { selectPage } from './redux/signIn/signIn.selectors';
import './App.css';

function App({ page }) {
  return (
    <div className="App">
      {
        page === 1 
        ? <SignInPage />
        : page === 2
        ? <OtpPage />
        : <SuccessPage />
      } 
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  page: selectPage
});

export default connect(mapStateToProps)(App);
