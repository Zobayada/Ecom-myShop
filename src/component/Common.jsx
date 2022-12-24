import React from 'react';
import { FaBars, FaHeart, FaShoppingBag } from "react-icons/fa";
import Banner from './Banner';

const Common = (props) => {


    return (
        <>
            <section className={props.hero}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <FaBars className='fa' />
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter & Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya & Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                    <li><a href="#">Fresh Bananas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">

                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__text">
                                        <div className="header__cart">
                                            <ul>
                                                <li><a href="#">
                                                    <FaHeart className='fa' />
                                                    <span>1</span></a></li>
                                                <li className="cart__open"><a href="#">
                                                    <FaShoppingBag className='fa' />
                                                    <span>3</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Banner />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Common
