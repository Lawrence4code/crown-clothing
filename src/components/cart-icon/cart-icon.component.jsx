import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

  const toggleCartDropDown = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartContainer onClick={toggleCartDropDown}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartContainer>
  );
};

export default CartIcon;
