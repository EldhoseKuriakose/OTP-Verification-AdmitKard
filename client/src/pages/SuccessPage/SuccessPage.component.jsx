import React from 'react';
import { ReactComponent as Logo } from '../../assets/SuccessPageImage.svg';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import './SuccessPage.styles.scss';

const SuccessPage = () => (
    <div className="success-page-container">
        <div className="success-page-logo-container">
            <Logo className="success-page-logo" />
        </div>
        <p className="welcome-message">Welcome to AdmitKard</p>
        <p className="short-desc">In order to provide you with<br /> a custom experience,<br /><span>we need to ask you a few questions.</span></p>
        
        <CustomButton text="Get Started" isGetStarted />

        <p className="hint">*This will only take 5 min.</p>
    </div>
);

export default SuccessPage;