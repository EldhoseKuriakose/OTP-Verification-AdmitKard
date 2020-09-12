import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ text, isGetStarted }) => (
    <div className="custom-button-container">
        <button className={`${isGetStarted ? 'get-started' : 'custom-button'}`}>{text}</button>
    </div>
);

export default CustomButton;