import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/AdmitKardLogo.svg';
import PhoneNumberInput from '../../components/PhoneNumberInput/PhoneNumberInput.component';
import './SignInPage.styles.scss';

const SignInPage = () => {
    const [phone, setPhone] = useState('');
    const handleChange = (e) => {
        setPhone(e.target.value);
    }
    return (
        <div className="sign-in-page-container">
            <div className="admitkard-logo-container">
                <Logo className="admitkard-logo" />
            </div>
            
            <p className="welcome">Welcome Back</p>
            <p className="subtitle">Please sign in to your account</p>
            <p className="bottom-caption">We will send you a one time SMS message.<br />Charges may apply.</p>

            <PhoneNumberInput value={phone} handleChange={handleChange} />
            <button className="sign-in-with-otp">Sign In with OTP</button>
        </div>
    );
};

export default SignInPage;