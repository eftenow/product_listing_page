import ProductCard from '../../Components/ProductCard/ProductCard';
import './Products.css';

const Products = ({ data }) => {
    return (
        <>
            <section className='cards-container'>
                {data.map(item => <ProductCard key={item.title} data={item} />)}
            </section>
        </>
    );
};



export default Products;