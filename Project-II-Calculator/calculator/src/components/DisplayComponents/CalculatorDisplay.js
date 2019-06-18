import React from 'react';
import './Display.css';

const Display = function(props) {
    return (
        <div className="display">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>
        
    )        
}

export default Display;