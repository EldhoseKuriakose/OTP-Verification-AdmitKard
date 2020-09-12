import React, { useRef } from 'react';
import { ReactComponent as Logo } from '../../assets/OtpPageImage.svg';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import './OtpPage.styles.scss';

const OtpPage = () => {
    const digit1 = useRef(0);
    const digit2 = useRef(0);
    const digit3 = useRef(0);
    const digit4 = useRef(0);

    const handleFocus = (e) => {
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
    }

    return (
        <div className="otp-page-container">
            <div className="otp-page-logo-container">
                <Logo className="otp-page-logo" />
            </div>
            <p className="verify-text">Please verify Mobile number</p>
            <p className="otp-send-text">An OTP is sent to +917896781234</p>
            <p className="change-phone-number">Change Phone Number</p>

            <div className="otp">
                <input
                    type="text"
                    maxLength="1"
                    ref={digit1}
                    name="digit1"
                    onKeyUp={handleFocus}
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
                    onKeyDown={handleDelete}
                /> 
            </div>

            <p className="code-not-received-text">Didn’t receive the code?<span className="resend">&emsp;Resend</span></p>

            <CustomButton text="Verify" />
        </div>
    );
}

export default OtpPage;