import React from 'react';
import { NavLink } from 'react-router-dom';
import breadcrumb from "../img/breadcrumb.jpg"

const BreadCrumb = (props) => {
    return (
        <>
            <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${breadcrumb})` }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{props.name}</h2>
                                <div className="breadcrumb__option">
                                    <NavLink to="/">Home</NavLink>
                                    <span>{props.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BreadCrumb