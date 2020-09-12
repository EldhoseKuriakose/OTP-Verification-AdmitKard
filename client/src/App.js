import React, { useState } from 'react';
import SignInPage from './pages/SignInPage/SignInPage.component';
import OtpPage from './pages/OtpPage/OtpPage.component';
import SuccessPage from './pages/SuccessPage/SuccessPage.component';
import './App.css';

function App() {
  const [pageNo, setPageNo] = useState(1);
  const [phone, setPhone] = useState('');

  const handleUpdatePhone = (e) => {
    setPhone('+' + e);
  }

  const handleSignInClick = (e) => {
    e.preventDefault();
    const payload = {
            "phone": `${phone}`
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    fetch('http://localhost:8000/generate-otp', requestOptions)
        .then(response => response.json())
        .then(data => data.message === 'success' ? alert("OTP is " + data.otp + "\nDon't share it with anyone") : alert("Something went wrong"))
        .then(setPageNo(2));
    }

  return (
    <div className="App">
      {
        pageNo === 1 
        ? <SignInPage phone={phone} handleUpdatePhone={handleUpdatePhone} handleSignInClick={handleSignInClick} />
        : pageNo === 2
        ? <OtpPage />
        : <SuccessPage />
      }
      
    </div>
  );
}

export default App;
