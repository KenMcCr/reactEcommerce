import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Data from '../Products.json';


class Products extends React.Component {
    constructor() {
        super()
        this.state =
            { Products: Data.Component, click: false }
    }
    //brings to top of page
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    //opposite of setClick in Hook
    handleClick = () => this.setState({ click: !this.click });


    //sort by price
    // priceSort = (a, b) => {
    //     if (a.price > b.price) {
    //         return 1
    //     } else if (a.price < b.price) {
    //         return -1
    //     } else {
    //         return 0
    //     };


    // };

    // sort by category
    productSort = (category) => {
        if (category === '') {
            this.setState({ Products: Data.Component })
            return;
        }

        const products = Data.Component.filter((item) => {
            return String(item.category) === category
        })

        const filteredProducts = [...products];
        this.setState({ Products: filteredProducts })
    };



    render() {

        return (
            <>
                <div className='hero-container hero-products'>
                    <Hero />
                </div>

                <div className="custom-select" >
                    <span className="menu-sort">Sort By: Category</span>
                    <ul className="select-custom">
                        <li onClick={() =>
                            this.productSort("Interior")}> Interior</li>
                        <li onClick={() =>
                            this.productSort("Exterior")}> Exterior</li>
                        <li onClick={() =>
                            this.productSort("Performance")}> Performance</li>
                    </ul>
                    <span className="menu-sort">Sort By: Price</span>
                    <ul className="select-custom">
                        <li onClick={() =>
                            this.priceSort()}> Low to High</li>
                        <li onClick={() =>
                            this.priceSort(!this.priceSort)}> High to Low</li>
                    </ul>

                </div>

                {
                    this.state.Products.map((card, id) => {
                        return (
                            <section className="galleryImages" key={id}>
                                <p>{card.category}</p>
                                <h2>{card.name}</h2>
                                <a href={card.link}><img src={card.image} alt="" /></a>
                                <p>
                                    {card.description} Starting at $
                                {card.price}
                                </p>
                            </section>

                        )

                    })
                }
                <Footer />
            </>
        )
    }
}

export default Products
