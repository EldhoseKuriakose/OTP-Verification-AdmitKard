import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberInput.styles.scss';

const PhoneNumberInput = ({ value, handleChange }) => (
    <div className="phone-number-input-container">
        <p>Enter Contact Number</p>
        <PhoneInput
            country={'in'}
            value={value}
            onChange={e => handleChange}
        />
    </div>
);

export default PhoneNumberInput;