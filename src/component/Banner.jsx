import React from 'react';
import heroBanner from "../img/banner.jpg"

const Banner = () => {
    return (
        <>
            <div className="hero__item set-bg" style={{ backgroundImage: `url(${heroBanner})` }}>
                <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>Vegetable <br />100% Organic</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="#" className="primary-btn">SHOP NOW</a>
                </div>
            </div>
        </>
    )
}

export default Banner
