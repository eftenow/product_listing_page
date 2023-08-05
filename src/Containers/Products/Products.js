import ProductCard from '../../Components/ProductCard/ProductCard';
import './Products.css';

const Products = () => {
    return (
        <>
            <section className='cards-container'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
        
            </section>
        </>
    )
};


export default Products;