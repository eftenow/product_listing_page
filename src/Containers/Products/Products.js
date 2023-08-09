import ProductCard from '../../Components/ProductCard/ProductCard';
import useLoadMore from '../../hooks/LoadMore';
import './Products.css';


const Products = ({ data }) => {
    const itemsPerPage = 20;
    const [currentProducts, loadMore, allItemsLoaded, showLess] = useLoadMore(data, itemsPerPage);

    return (
        <section className='product-section'>
            {data.length === 0 ? (
                <p className="no-products-text">No products match your criteria.</p>
            ) : (
                <><p className='products-counter'>{currentProducts.length} out of {data.length} products displayed</p>
                    <section className='cards-container'>
                        {currentProducts.map(item => <ProductCard key={item.title} data={item} />)}
                    </section>
                    <section className="product-controls">
                        {!allItemsLoaded && <button className='load-more-btn' onClick={loadMore}>Load More</button>}
                        {currentProducts.length > itemsPerPage && <button className='load-less-btn' onClick={showLess}>Show Less</button>}
                    </section>
                </>
            )}
        </section>
    );
};



export default Products;