import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
    <div className='hero-container'>
        <video src='/CalliCoinsStorage/Video2.mp4' autoPlay loop muted />
        <h1> PROFITS AWAIT </h1>
        <p>Don't miss out...</p>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'>
                GET STARTED</Button>
S
            <Button className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'>
                INVEST NOW 
                <i className='far fa-play-circle' /></Button>
        </div>
    </div>
    )
}

export default HeroSection;