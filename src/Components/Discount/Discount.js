const Discount = ({ newPrice, prevPrice }) => {
    const discount = newPrice ? Math.round((1 - newPrice / prevPrice) * 100) : null;
    return discount ? (
        <div className="discount">
            <span>-{discount}%</span>
        </div>
    ) : null;
};

export default Discount;