import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) {
    return <h2>No products in your cart.</h2>;
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product </span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description </span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity </span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price </span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Action </span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
