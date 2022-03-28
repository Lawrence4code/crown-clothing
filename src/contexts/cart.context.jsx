import { createContext, useEffect, useState} from 'react';


export const CartContext = createContext({
    isCartOpen: false,
    toggleCartDropDown: () => {},
    cartItems: [],
    addItemToCart: () => {}, 
    removeItemFromCart: () => {},
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

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
    }

    return cartItems.map((cartItem) => {
        return cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
    })


}

const removeCartItemById = (cartItems, id) => {
    return cartItems.filter((cartitem) => cartitem.id !== id)
}



export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal ] = useState(0);

    useEffect(() => {
        const cartItemsCount = cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        }, 0)
        setCartItemsCount(cartItemsCount)
        const cartTotal = cartItems.reduce((acc, cartItems) => {
            return acc + (cartItems.quantity * cartItems.price)
        }, 0)
        setCartTotal(cartTotal)
    }, [cartItems])

    const addItemToCart = (item) => {
        setCartItems(addCartItem(cartItems, item))
    }

    const removeItemFromCart = (item) => {
        setCartItems(removeCartItem(cartItems, item))
    }

    const removeItemFromCartById = (id) => {
        setCartItems(removeCartItemById(cartItems, id))
    } 


    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartItemsCount,
        removeItemFromCart,
        removeItemFromCartById,
        cartTotal
    }

    return (
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}