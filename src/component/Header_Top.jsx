import React from 'react';
import { FaUser } from "react-icons/fa";
import language from "../img/language.png"

const Header_Top = () => {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__torder">
                                    <a href="#">Take My Order</a>
                                </div>

                                <div className="header__top__right__language">
                                    <img src={language} alt="language" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li>
                                            <a href="#">Spanish</a>
                                        </li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div>

                                <div className="header__top__right__auth">
                                    <button type="button" className="btn">
                                        <a href="#"> <FaUser /> Signup/Login</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header_Top
