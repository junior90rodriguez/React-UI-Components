import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardBanner = function() {
    return (
        <div className="bannerImage">
            <img id="bannerImage" src=" https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"></img>
            <div><CardContent/></div>
        </div>
        
    )
}
export default CardBanner;