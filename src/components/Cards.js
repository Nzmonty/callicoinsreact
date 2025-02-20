import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic coins!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                        <CardItem 
                            src='CalliCoinsStorage/image-hi.jpg'
                            text='383 Resident'
                            label='New!'
                            path='/market'
                        />
                        <CardItem 
                            src='CalliCoinsStorage/image-bomb.jpeg'
                            text='301 Resident'
                            label='Old!'
                            path='/market'
                        />
                        <CardItem 
                            src='CalliCoinsStorage/image-threat.jpg'
                            text='This is a Threat'
                            label='Yup'
                            path='/market'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
