import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                Cart items
            </div>
            <Button buttonType='inverted'> Proceed To Checkout </Button>
        </div>
    )
}

export default CartDropDown;