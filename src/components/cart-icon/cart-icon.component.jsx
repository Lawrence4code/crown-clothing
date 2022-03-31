import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import { CartContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import './cart-icon.styles.jsx';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemsCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleCartDropDown = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartContainer onClick={toggleCartDropDown}>
      <ShoppingIcon />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartContainer>
  );
};

export default CartIcon;
