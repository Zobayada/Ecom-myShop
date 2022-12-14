import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaPinterest, FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import payment from "../img/payment-item.png"

const Footer = () => {
    return (
        <>
            <footer className='footer spad'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <NavLink to="/">
                                        <h2>my<b className="text-danger">Shop</b><b>.</b></h2>
                                    </NavLink>
                                </div>
                                <ul>
                                    <li>Address: Alim uddin Road, Feni</li>
                                    <li>Phone: +015 81190907</li>
                                    <li>Email: azobayada@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">About Our Shop</a></li>
                                    <li><a href="#">Secure Shopping</a></li>
                                    <li><a href="#">Delivery infomation</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Our Sitemap</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Who We Are</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Innovation</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__widget__social">
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                    <a href="#">
                                        <FaPinterest />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer__copyright">
                                <div className="footer__copyright__text">
                                    <p>
                                        Copyright &copy; {new Date().getFullYear()} All rights reserved | Designed <FaHeart /> by <a href="https://github.com/Zobayada" target="_blank" class="text-danger">Zobayada</a>
                                    </p>
                                </div>
                                <div className="footer__copyright__payment">
                                    <img src={payment} alt="payment" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
