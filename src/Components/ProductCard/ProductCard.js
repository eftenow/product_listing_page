import React from 'react'
import { AiFillShopping } from 'react-icons/ai'


const ProductCard = () => {
    return (
        <article className='product-card'>
            <img className="product-image" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cabc3285-a6b3-40af-9261-8cdf403166ad/gt-jump-basketball-shoes-Fc9gSw.png" alt='Product' />
            <div className='card-details'>
                <h3 className='card-title'>Nike Shoes</h3>
                <p className='card-price'>
                    <div className='price'>
                        <del>$120</del> $ <span>100</span>
                    </div>
                    <div className='purchase-item'>
                        <AiFillShopping className='purchase-item-icon' />
                    </div>
                </p>
            </div>
        </article>
    )
}


export default ProductCard;