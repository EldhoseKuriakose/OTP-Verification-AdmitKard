import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ text }) => (
    <div className="custom-button-container">
        <button className="custom-button">{text}</button>
    </div>
);

export default CustomButton;