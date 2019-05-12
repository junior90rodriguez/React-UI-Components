import React from 'react';
import './Button.css';

const NumberButton = function(props) {
    return (
        <div className="number-button">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>        
    )        
};

export default NumberButton;