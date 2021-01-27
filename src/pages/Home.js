import React from 'react'
import '../App.css';
import Cards from '../components/Cards';
import Hero from '../components/Hero';


function Home() {
    return (
        <>
            <div className='hero-container hero-home '>
                <Hero />
            </div>
            <Cards />
        </>

    )
}

export default Home;