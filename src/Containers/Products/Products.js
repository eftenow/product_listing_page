import ProductCard from '../../Components/ProductCard/ProductCard';
import useLoadMore from '../../hooks/LoadMore';
import './Products.css';


const Products = ({ data }) => {
    console.log(data);
    const itemsPerPage = 20;
    const [currentProducts, loadMore, allItemsLoaded, showLess] = useLoadMore(data, itemsPerPage);
    console.log(currentProducts);
    return (
        <section className='product-section'>
            <section className='cards-container'>
                {currentProducts.map(item => <ProductCard key={item.title} data={item} />)}
            </section>
            <section className="product-controls">
                {!allItemsLoaded && <button className='load-more-btn' onClick={loadMore}>Load More</button>}
                {currentProducts.length > itemsPerPage && <button className='load-less-btn' onClick={showLess}>Show Less</button>}
                <p className='products-counter'>{currentProducts.length} out of {data.length} products displayed</p>
            </section>
        </section>
    );
};



export default Products;