import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

    const toggleCartDropDown = () => {
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div className="cart-icon-container" onClick={toggleCartDropDown}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon;