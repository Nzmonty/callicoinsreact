import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
    <div className='hero-container'>
        {/* <video src='/CalliCoinsStorage/Video2.mp4'
        autoPlay loop muted /> */}
        <h1>WELCOME</h1>
        <p>Don't miss out...</p>
        <div className='hero-btns'>
            {/* <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    GET STARTED
            </Button> */}
            <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    Visit the Market &nbsp;
                <i className='fa-solid fa-store' />
            </Button>
        </div>
        <h3><br />or scroll down to <br />view more information on Calli Coin </h3>
    </div>
    );
}

export default HeroSection;