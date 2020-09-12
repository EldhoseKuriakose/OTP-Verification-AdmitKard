import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/OtpPageImage.svg';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { updatePage } from '../../redux/signIn/signIn.actions';
import { selectPhone } from '../../redux/signIn/signIn.selectors';
import './OtpPage.styles.scss';

const OtpPage = ({ phone, updatePage }) => {
    const digit1 = useRef(0);
    const digit2 = useRef(0);
    const digit3 = useRef(0);
    const digit4 = useRef(0);

    const [valid, setValid] = useState(false);

    const handleFocus = (e) => {
        if(digit1.current.value.length >= 1 && digit2.current.value.length >= 1
            && digit3.current.value.length >= 1 && digit4.current.value.length >= 1) {
                setValid(true);
        }
        if(e.target.value.length >= 1) {
            switch(e.target.name) {
                case 'digit1':
                    digit2.current.focus();
                    break;
                case 'digit2':
                    digit3.current.focus();
                    break;
                case 'digit3':
                    digit4.current.focus();
                    break;
                default:
                    return;
            }
        }
    }

    const handleDelete = (e) => {
        if(digit1.current.value.length <= 0 || digit2.current.value.length <= 0
            || digit3.current.value.length <= 0 || digit4.current.value.length <= 0) {
                setValid(false);
        }
        if(e.target.value.length <= 0 && e.keyCode === 8) {
            switch(e.target.name) {
                case 'digit2':
                    digit1.current.focus();
                    break;
                case 'digit3':
                    digit2.current.focus();
                    break;
                case 'digit4':
                    digit3.current.focus();
                    break;
                default:
                    return;
            }
        }
    }

    const handlePaste = (e) => {
        var data = e.clipboardData.getData('Text');
        e.target.value = data.substr(0, 1);
        data = data.substr(1);
        var arr =['', '', ''];
        var i = 0;
        while(data !== '' && i < 3) {
            arr[i] = data.substr(0, 1);
            data = data.substr(1);
            i++;
        }
        digit2.current.value = arr[0];
        digit3.current.value = arr[1];
        digit4.current.value = arr[2];
        digit4.current.focus();
        if(digit1.current.value.length >= 1 && digit2.current.value.length >= 1
            && digit3.current.value.length >= 1 && digit4.current.value.length >= 1) {
                setValid(true);
        }
    }

    const handleVerifyClick = (e) => {
        e.preventDefault();
        var otp = digit1.current.value + digit2.current.value + digit3.current.value + digit4.current.value;
        const payload = {
                "phone": `${phone}`,
                "otp": otp
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        fetch('http://localhost:8000/verify-otp', requestOptions)
            .then(response => response.json())
            .then(data => data.message === 'success' ? updatePage(3) : alert("Invalid OTP"));
    }

    return (
        <div className="otp-page-container">
            <div className="otp-page-logo-container">
                <Logo className="otp-page-logo" />
            </div>
            <p className="verify-text">Please verify Mobile number</p>
            <p className="otp-send-text">An OTP is sent to {phone}</p>
            <p className="change-phone-number">Change Phone Number</p>

            <div className="otp">
                <input
                    type="text"
                    maxLength="1"
                    ref={digit1}
                    name="digit1"
                    onKeyUp={handleFocus}
                    onKeyDown={handleDelete}
                    onPaste={handlePaste}
                />
                <input
                    type="text"
                    maxLength="1"
                    ref={digit2}
                    name="digit2"
                    onKeyUp={handleFocus}
                    onKeyDown={handleDelete}
                />
                <input
                    type="text"
                    maxLength="1"
                    ref={digit3}
                    name="digit3"
                    onKeyUp={handleFocus}
                    onKeyDown={handleDelete}
                />
                <input
                    type="text"
                    maxLength="1"
                    ref={digit4}
                    name="digit4"
                    onKeyUp={handleFocus}
                    onKeyDown={handleDelete}
                /> 
            </div>

            <p className="code-not-received-text">Didn’t receive the code?<span className="resend">&emsp;Resend</span></p>
            {
                valid
                ?   <CustomButton text="Verify" handleClick={handleVerifyClick} />
                :   <CustomButton isDisabled text="Verify" />
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    phone: selectPhone
});

const mapDispatchToProps = dispatch => ({
    updatePage: pageNo => dispatch(updatePage(pageNo))
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpPage);