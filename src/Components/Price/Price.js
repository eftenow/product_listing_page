const Price = ({ newPrice, prevPrice }) => (
    newPrice ? (
        <>
            <span className='discounted-price'>${newPrice}</span>
            <del>${prevPrice}</del>
        </>
    ) : (
        <span className='regularPrice'>${prevPrice}</span>
    )
);

export default Price;