import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id?
        {...cartItem, quantity: cartItem.quantity +1}: cartItem)

    }

    return [...cartItems,{...productToAdd, quantity: 1}]
}

export const CartContext = createContext({

    visibility: false,
    setVisibility: () => {}, 
    cartItems:[],
    addItemToCart: () => {},
    cartItemSize: 0
});


export const CartProvider = ({children}) => {

    const [ visibility, setVisibility] = useState(false)


    const [cartItems, setCartItems] = useState([]); 

    const addItemToCart = (producttoAdd) => {
        setCartItems(addCartItem(cartItems, producttoAdd))
    }

    const [cartItemSize, setcartItemSize] = useState(0)
    
    useEffect(()=> {

            const newcCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
            setcartItemSize(newcCartCount)
    }, [cartItems])

    const value  = {visibility, setVisibility, addItemToCart, cartItems, cartItemSize}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

