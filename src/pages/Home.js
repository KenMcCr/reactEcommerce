import React, { useEffect } from 'react'
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='hero-container hero-home '>
                <Hero />
            </div>
            <Cards />
            <Footer />
        </>

    )
}

export default Home;