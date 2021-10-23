import React from 'react';
import '../App.css';
import  Button  from './Button';
import '../components/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
         
                <h1>Instashare</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btn">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        GET STARTED</Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        SHARE NOW<i className='far fa-play-circle ' /></Button>

                </div>

            
        </div>
    )
}

export default HeroSection;
