import React from 'react'
import { Button } from './Button'

function Footer() {
    return (
        <div className ='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Text Uno
                </p>
                <p className='footer-subscription-heading'>
                    Text Dos
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                        type='email'
                        name='email' 
                        placeholder='Your Email'
                        className='footer-input'
                        />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Footer
