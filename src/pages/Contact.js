import React, { useEffect } from 'react'
import '../App.css';
import Footer from '../components/Footer';
import Hero from '../components/Hero';



function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='hero-container hero-contact'>
                <Hero />
            </div>
            <div>
                <form className="contact-form">
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" name="fname" required></input>

                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname" required></input>

                    <label for="email">Email Address:</label>
                    <input type="text" id="email" name="email" required></input>

                    <label for="phonenumber">Phone Number:</label>
                    <input type="text" id="phonenumber" name="phonenumber" required></input>

                    <label for="textarea">Leave A Message:</label>
                    <textarea id="textarea" name="Comment" rows="10" cols="50">
                    </textarea>
                    <button className="contact-button">Submit</button>
                </form>
            </div>
            <Footer />

        </>
    )
}

export default Contact
