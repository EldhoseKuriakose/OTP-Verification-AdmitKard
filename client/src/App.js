import React, { useState } from 'react';
import SignInPage from './pages/SignInPage/SignInPage.component';
import OtpPage from './pages/OtpPage/OtpPage.component';
import SuccessPage from './pages/SuccessPage/SuccessPage.component';
import './App.css';

function App() {
  const [pageNo, setPageNo] = useState(2);
  return (
    <div className="App">
      {
        pageNo === 1 
        ? <SignInPage />
        : pageNo === 2
        ? <OtpPage />
        : <SuccessPage />
      }
      
    </div>
  );
}

export default App;
