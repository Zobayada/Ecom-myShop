import React from 'react';
import { ImCross } from "react-icons/im";
import language from "../img/language.png";

const HumbergerMenu = () => {


    return (
        <>
            <div className="humberger__menu__overlay" ></div>
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <h2>my<b className="text-danger">Shop</b><b>.</b></h2>
                    <div className="close d-lg-none" >
                        <ImCross />
                    </div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src={language} alt="language" />
                        <div>English</div>
                        <span className="arrow_carrot-down"></span>
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HumbergerMenu
