import React from 'react'
import { Button } from './Button'


function HeroSection() {
    return (
    <div className='hero-container'>
        <video src="/CalliCoinsStorage/video2.mov" autoPlay loop muted />
        <h1> PROFITS AWAIT </h1>
        <p>Don't miss out...</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' 
            buttonSize={'btn--large'}>GET STARTED</Button>
        </div>
    </div>
    )
}

export default HeroSection
