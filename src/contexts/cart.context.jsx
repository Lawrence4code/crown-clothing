import { createContext, useEffect, useState} from 'react';


export const CartContext = createContext({
    isCartOpen: false,
    toggleCartDropDown: () => {},
    cartItems: [],
    addItemToCart: () => {}, 
    cartItemsCount: 0
})

const addCartItem =  (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
        })
    }

    return [...cartItems, {...productToAdd, quantity: 1 } ]
}



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        const cartItemsCount = cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        }, 0)
        setCartItemsCount(cartItemsCount)
    }, [cartItems])

    const addItemToCart = (item) => {
        setCartItems(addCartItem(cartItems, item))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartItemsCount
    }

    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}