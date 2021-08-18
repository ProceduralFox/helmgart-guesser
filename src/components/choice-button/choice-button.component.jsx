import React from 'react';

import './choice-button.styles.css';


const ChoiceButton = ({handleChange, value, className}) => (

    <button className="btn" onClick={handleChange}>{value}</button>

);

export default ChoiceButton;