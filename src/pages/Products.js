import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Data from '../Products.json';

class Products extends React.Component {
    constructor() {
        super()
        this.state =
            { Products: Data.Component }
    }
    render() {
        return (
            <>
                <div className='hero-container hero-products'>
                    <Hero />
                </div>
                {this.state.Products.map((card) => {
                    return (
                        <section className="galleryImages">
                            <h2>{card.name}</h2>
                            <a target="_blank" href={card.link}><img src={card.image} alt="" /></a>
                            <p>
                                {card.description} Starting at $
                                {card.price}



                            </p>
                        </section>

                    )
                })}

            </>
        )
    }
}
//add onclick event for card modal to display website as a card
//on map function you can do .sort() for product filter this.state.Products.sort().map()
export default Products
