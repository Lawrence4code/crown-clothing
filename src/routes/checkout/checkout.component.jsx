import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
