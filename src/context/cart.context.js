import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToadd) => {

    let temporaryCart = [];
    
    // If the cart is empty just add first product
    if(cartItems.length == 0){
        productToadd.product.quantity = 1;
        temporaryCart = [...cartItems, productToadd];
    }

    // based on condition add the product
    if(cartItems.length > 0){
        {cartItems.map((item) => {
            if(item.product.id === productToadd.product.id){
                item.product.quantity++;
                temporaryCart = [...cartItems]
            }else{
                productToadd.product.quantity = 1;
                temporaryCart = [...cartItems, productToadd];
            }
        })
        }
    }
    
    return temporaryCart;
}

export const CartContext = createContext({
    toggle: false,
    cartItems: [],
    addItemToCart: () => {},
    cartQty: 0,
    total: 0
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
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.product.quantity, 0);
        setCartQty(newCartCount);

        // Cart Total
        cartItems.forEach(element => {
            total = [...total, element.product.quantity * element.product.price];
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
    const value = {toggle, setToggle, cartItems, setCartitems, cartQty, setCartQty, addItemToCart, total};

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}