import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { AiTwotoneStar } from 'react-icons/ai';
import './ProductCard.css';


const ProductCard = () => {
    return (
        <article className='product-card'>
            <img className="product-image" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cabc3285-a6b3-40af-9261-8cdf403166ad/gt-jump-basketball-shoes-Fc9gSw.png" alt='Product' />
            <div className='card-details'>
                <p className="brand-name">Nike</p>
                <p className='card-title'>Nike Air Force 1</p>
                <section className="card-reviews">
                            <AiTwotoneStar className='rating-star' />
                            <span className="total-reviews">5</span>
                        </section>
                <section className='card-price'>
                    <div className='price'>
                        <span className='discounted-price'>$100</span> <del>$120</del>
                    </div>
                    <div className='purchase-item'>
                        <BiShoppingBag className='purchase-item-icon' />
                    </div>
                    <div className="discount">
                        <span>-10%</span>
                    </div>
                </section>
            </div>
        </article>
    )
}


export default ProductCard;
