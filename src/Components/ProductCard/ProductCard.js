import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { AiTwotoneStar } from 'react-icons/ai';
import './ProductCard.css';


const ProductCard = ({ data }) => {
    return (
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
                        <span className='discounted-price'>${data.newPrice}</span> <del>${data.prevPrice}</del>
                    </div>
                    <div className='purchase-item'>
                        <BiShoppingBag className='purchase-item-icon' />
                    </div>
                    <div className="discount">
                        <span>-{Math.round((1 - data.newPrice / data.prevPrice) * 100)}%</span>

                    </div>
                </section>
            </div>
        </article>
    );
}



export default ProductCard;
