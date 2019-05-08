import React from 'react';
import './Header.css';
import ThumbNail from './ImageThumbnail';
import Title from './HeaderTitle';
import Content from './HeaderContent';

const Container = function() {
    return (
    <header className="container">
        <div>
        <ThumbNail/>
        </div>
        <div className="head-content">
        <Title/>
        <Content/>
        </div>
    </header>
    ) 
};

export default Container;