import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {id, name, imageUrl, quantity, price} = cartItem;
    const { addItemToCart, removeItemFromCart, removeItemFromCartById } = useContext(CartContext)
 
    return (
        <div key={id}className='checkout-item-container'>
            <div className='image-container'>
            <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
                    <span>&#10094;</span>
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    <span>&#10095;</span>
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItemFromCartById(cartItem.id)} >&#10005;</div>
        </div>
    )
}

export default CheckoutItem;