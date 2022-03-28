
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);


    if(cartItems.length === 0 ) {
        return <h2>No products in your cart.</h2>
    }
    return (
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className='header-block'> <span>Product </span></div>
                <div className='header-block'> <span>Description </span></div>
                <div className='header-block'> <span>Quantity </span></div>
                <div className='header-block'> <span>Price </span></div>
                <div className='header-block'> <span>Action </span></div>
            </div>

            {
                cartItems.map((cartItem) => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }
            <div className="total">${cartTotal}</div>
        </div>
    )
}

export default Checkout;