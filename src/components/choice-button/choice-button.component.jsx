import React from 'react';

// import './choice-button.styles.scss';


const ChoiceButton = ({handleChange, value}) => (

    <button onClick={handleChange}>{value}</button>

);

export default ChoiceButton;