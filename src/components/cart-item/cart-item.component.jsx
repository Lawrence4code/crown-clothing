import {
  CartItemContainer,
  ItemDetails,
  ItemName,
  ItemPrice,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>
          {quantity} x ${price}
        </ItemPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
