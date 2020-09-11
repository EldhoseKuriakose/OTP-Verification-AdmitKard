import React, { useState } from 'react';
import SignInPage from './pages/SignInPage/SignInPage.component';
import './App.css';

function App() {
  const [pageNo, setPageNo] = useState(1);
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
