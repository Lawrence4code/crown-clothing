import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles.jsx';

const CartDropDown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsCartOpen(!isCartOpen);
    navigate('/checkout');
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>No Items In Cart </EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckout}>
        Proceed To Checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
