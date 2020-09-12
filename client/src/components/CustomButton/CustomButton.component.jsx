import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ text, isGetStarted, isDisabled, handleClick }) => (
    <div className="custom-button-container">
        <button
            className={`${isGetStarted ? 'get-started' : `${isDisabled ? 'disabled' : 'custom-button'}`}`}
            onClick={handleClick}
        >
            {text}
        </button>
    </div>
);

export default CustomButton;