import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContain = function() {
    return (
       <a href="https://www.reactjs.org">
            <div class='card-container'>
                <CardBanner/>
            </div>
        </a> 
    
    )
};

export default CardContain;