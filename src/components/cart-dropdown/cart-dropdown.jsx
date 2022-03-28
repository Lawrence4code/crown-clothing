import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsCartOpen(!isCartOpen);
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckout}>
        Proceed To Checkout{' '}
      </Button>
    </div>
  );
};

export default CartDropDown;
