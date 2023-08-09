import React, { useState } from 'react';
import './ProductCard.css';
import Notification from '../Notification/Notification';
import Price from '../Price/Price';
import Reviews from '../Reviews/Reviews';
import PurchaseButton from '../PurchaseButton/PurchaseButton';
import Discount from '../Discount/Discount';

const ProductCard = ({ data }) => {
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    const handlePurchaseClick = () => {
        setNotificationMessage(`${data.title} successfully added to the cart!`);
        setNotificationVisible(true);
    };

    return (
        <>
        <article className='product-card'>
            <img className="product-image" src={data.img} alt={data.title} />
            <div className='card-details'>
                <p className="brand-name">{data.brand}</p>
                <p className='card-title'>{data.title}</p>
                <Reviews rating={data.rating} />
                <section className='card-price'>
                    <Price newPrice={data.newPrice} prevPrice={data.prevPrice} />
                    <PurchaseButton handlePurchaseClick={handlePurchaseClick} />
                    <Discount newPrice={data.newPrice} prevPrice={data.prevPrice} />
                </section>
            </div>
        </article>
        {notificationVisible && (
            <Notification message={notificationMessage} onClose={() => setNotificationVisible(false)} />
        )}</>
    );
}

export default ProductCard;
