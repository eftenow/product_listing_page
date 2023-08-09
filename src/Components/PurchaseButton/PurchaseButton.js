import { BiShoppingBag } from 'react-icons/bi';


    const PurchaseButton = ({ handlePurchaseClick }) => (
        <button className='purchase-item' onClick={handlePurchaseClick} >
            <BiShoppingBag className='purchase-item-icon' />
        </button>
    );

export default PurchaseButton;