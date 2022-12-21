import React from 'react';
import heroBanner from "../img/banner.jpg";

const Carousel = () => {
    return (
        <>
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel owl-theme">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: `url(${heroBanner})` }} >
                                    <h5><a href="#">Fresh Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: `url(${heroBanner})` }} >
                                    <h5><a href="#">Dried Fruit</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: `url(${heroBanner})` }} >
                                    <h5><a href="#">Vegetables</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: `url(${heroBanner})` }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ backgroundImage: `url(${heroBanner})` }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Carousel