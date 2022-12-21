import React from 'react'
import { FaHeart, FaShoppingBag, FaRetweet } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice"


const FeaturedImg = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${props.img})` }}>
                        <ul className="featured__item__pic__hover">
                            <li><a href="#">
                                <FaHeart className='icon' />
                            </a></li>
                            <li><a href="#">
                                <FaRetweet className='icon' />
                            </a></li>
                            <li><a href="#">
                                <FaShoppingBag className='icon' />
                            </a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">{props.name}</a></h6>
                        <h5><FormatPrice price={props.price} /></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedImg