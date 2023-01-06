import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const RemoveFromCart = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if(existingCartItem){
        return cartItems.map((cartitem) => {
            if((cartitem.id == productToRemove.id) && (cartitem.quantity > 1)){
               return {...cartitem,quantity: cartitem.quantity - 1}
            }else{
                return {...cartitem}
            }
        })
    }
}

const ClearFromCart = (cartItems, productToClear) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToClear.id
    );

    if(existingCartItem){
        return cartItems.filter(cartitem => cartitem.id !== productToClear.id);
    };
}

export const CartContext = createContext({
    toggle: false,
    cartItems: [],
    addItemToCart: () => {},
    cartQty: 0,
    total: 0,
    RemoveFromCart: () => {},
    ClearFromCart: () => {}
});

export const CartProvider = ({children}) => {

    const [toggle, setToggle] = useState(false);
    const [total, setTotal] = useState(0);
    const [cartQty, setCartQty] = useState(0);
    const [cartItems, setCartitems] = useState([]);

    useEffect(() => {   

        let total = [];
        let carttotal = 0;

        // Cart Quantity Count
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartQty(newCartCount);

        // Cart Total
        cartItems.forEach(element => {
            total = [...total, element.quantity * element.price];
            carttotal = total.reduce(function(total1, item1){
                return total1 + item1;
            });
        });

        setTotal(carttotal);

    },[cartItems])

    const addItemToCart = (productToadd) => {
        // setCartQty(cartQty + 1);
        setCartitems(addCartItem(cartItems, productToadd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartitems(RemoveFromCart(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToClear) => {
        setCartitems(ClearFromCart(cartItems, productToClear))
    }

    const value = {toggle, setToggle, cartItems, setCartitems, cartQty, setCartQty, addItemToCart, total, removeItemFromCart, clearItemFromCart};

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}