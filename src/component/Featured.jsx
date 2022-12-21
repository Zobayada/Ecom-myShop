import React, { useState } from 'react';
import ImgData from '../ImgData/FeaturedImgData';
import FeaturedImg from './FeaturedImg';

const btnValue = ["All", ...new Set(ImgData.map((curBtn) => curBtn.category))];

const Featured = () => {
    const [btn, setBtn] = useState(btnValue);


    const [items, setItems] = useState(ImgData);
    const filterItem = (categoryItem) => {
        if (categoryItem === "All") {
            setItems(ImgData);
            return;
        }
        const updateItem = ImgData.filter((curElement) => {
            return curElement.category === categoryItem;
        })
        setItems(updateItem);
    }
    return (
        <>
            <section className='featured spad'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    {
                                        btn.map((curData, index) => {
                                            return (
                                                <li key={index} onClick={() => filterItem(curData)}>
                                                    {curData}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {
                            items.map((val, ind) => {
                                return <FeaturedImg
                                    key={ind}
                                    img={val.img}
                                    name={val.name}
                                    price={val.price} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured