import React from 'react';
import { ReactComponent as Logo } from '../../assets/AdmitKardLogo.svg';
import PhoneNumberInput from '../../components/PhoneNumberInput/PhoneNumberInput.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import './SignInPage.styles.scss';

const SignInPage = ({ phone, handleUpdatePhone, handleSignInClick }) => (
    <div className="sign-in-page-container">
        <div className="admitkard-logo-container">
            <Logo className="admitkard-logo" />
        </div>
        
        <p className="welcome">Welcome Back</p>
        <p className="subtitle">Please sign in to your account</p>

        <PhoneNumberInput value={phone} handleUpdatePhone={handleUpdatePhone} />
        
        <p className="bottom-caption">We will send you a one time SMS message.<br />Charges may apply.</p>
        {
            phone.length >= 7
            ?   <CustomButton handleClick={handleSignInClick} text="Sign In with OTP" />
            :   <CustomButton isDisabled text="Sign In with OTP" />
        }
    </div>
);

export default SignInPage;