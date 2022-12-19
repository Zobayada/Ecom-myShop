import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <NavLink to="/">
                                <h2>my<b className="text-danger">Shop</b><b>.</b></h2>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-7">
                        <nav className="header__menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Pages</NavLink>
                                    <ul className="header__menu__dropdown">
                                        <li><NavLink to="/shop-details">Shop Details</NavLink></li>
                                        <li><NavLink to="./cart">Shoping Cart</NavLink></li>
                                        <li><NavLink to="./checkout">Check Out</NavLink></li>
                                        <li><NavLink to="./blog-details">Blog Details</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="humberger__open">
                    <FaBars />
                </div>
            </div>
        </>
    )
}

export default Navbar
