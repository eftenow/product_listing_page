import React, { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { AiTwotoneStar } from 'react-icons/ai';
import './ProductCard.css';
import Notification from '../Notification/Notification';

const ProductCard = ({ data }) => {
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    const handlePurchaseClick = () => {
        setNotificationMessage(`${data.title} successfully added to the cart!`);
        setNotificationVisible(true);
    };
    const renderPrice = () => {
        return data.newPrice ? (
            <>
                <span className='discounted-price'>${data.newPrice}</span>
                <del>${data.prevPrice}</del>
            </>
        ) : (
            <span className='regularPrice'>${data.prevPrice}</span>
        );
    };

    const renderDiscount = () => {
        return data.newPrice ? (
            <div className="discount">
                <span>-{Math.round((1 - data.newPrice / data.prevPrice) * 100)}%</span>
            </div>
        ) : null;
    };

    return (
        <>
        <article className='product-card'>
            <img className="product-image" src={data.img} alt={data.title} />
            <div className='card-details'>
                <p className="brand-name">{data.brand}</p>
                <p className='card-title'>{data.title}</p>
                <section className="card-reviews">
                    <AiTwotoneStar className='rating-star' />
                    <span className="total-reviews">{data.rating}</span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        {renderPrice()}
                    </div>
                    <button className='purchase-item' onClick={handlePurchaseClick}>
                        <BiShoppingBag className='purchase-item-icon' />
                    </button>

                    {renderDiscount()}
                </section>
            </div>
        </article>
        {notificationVisible && (
            <Notification message={notificationMessage} onClose={() => setNotificationVisible(false)} />
        )}</>
    );
}




export default ProductCard;
