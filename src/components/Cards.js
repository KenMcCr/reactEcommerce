import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import Original from '../media/original.gif';
import Contact from '../media/contact.gif';
import Dodge from "../media/Dodge.gif";;




function Cards() {
    return (
        <div className="cards">
            <h1>Fuel Your Drive</h1>
            <div className="cards__container">

                <ul className="cards__items">
                    <Carditem
                        src={Original} text='What We Offer' path='/products' />
                    <Carditem
                        src={Dodge} text='Experience Auto Tune !' path='/' />
                    <Carditem
                        src={Contact} text='Reach Out !' path='/contact' />

                </ul>
            </div>
        </div>
    )
}

export default Cards
