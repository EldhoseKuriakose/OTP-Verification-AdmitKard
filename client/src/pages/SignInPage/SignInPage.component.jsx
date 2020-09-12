import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/AdmitKardLogo.svg';
import PhoneNumberInput from '../../components/PhoneNumberInput/PhoneNumberInput.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { updatePage, updatePhone } from '../../redux/signIn/signIn.actions';
import { selectPhone } from '../../redux/signIn/signIn.selectors';
import './SignInPage.styles.scss';

const SignInPage = ({ phone, updatePhone, updatePage }) => {

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
            .then(data => data.message === 'success'
                        ? alert("OTP is " + data.otp + "\nDon't share it with anyone")
                        : alert("Something went wrong"))
            .then(updatePage(2));
    }

    const handleUpdatePhone = (e) => {
        updatePhone('+' + e);
    }

    return (
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
}

const mapStateToProps = createStructuredSelector({
    phone: selectPhone
});
  
const mapDispatchToProps = dispatch => ({
    updatePhone: phone => dispatch(updatePhone(phone)),
    updatePage: pageNo => dispatch(updatePage(pageNo))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);