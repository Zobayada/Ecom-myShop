import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome, FaListUl, FaShoppingBag, FaBell, FaUserPlus } from "react-icons/fa";


const MobileMenu = () => {

    return (
        <>
            <div className="menu-bottom fixed-bottom shadow-lg d-lg-none bg-white rounded-top">
                <div className="row align-items-center gutters-5">
                    <div className="col">
                        <NavLink to="/" className="text-reset d-block text-center pb-2 pt-3">
                            <FaHome />
                            <span className='d-block'>Home</span>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink className='humberger__open text-reset d-block text-center pb-2 pt-3'>
                            <FaListUl />
                            <span className="d-block">Menu</span>
                        </NavLink>
                    </div>
                    <div className="col-auto">
                        <NavLink href="#" className="cart__open text-reset d-block text-center pb-2 pt-3">
                            <span className="cart-menu align-items-center border d-flex justify-content-center rounded-circle ">
                                <FaShoppingBag />
                            </span>
                            <span className="d-block mt-1 fs-10 fw-600 opacity-60 ">Cart(<span className="count">0</span>)</span>
                        </NavLink>
                    </div>
                    <div className="col">
                        <a href="#" className="text-reset d-block text-center pb-2 pt-3">
                            <FaBell />
                            <span className="d-block">Notification</span>
                        </a>
                    </div>
                    <div className="col">
                        <NavLink className=" text-reset d-block text-center pb-2 pt-3">
                            <FaUserPlus />
                            <span className="d-block" >Account</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
