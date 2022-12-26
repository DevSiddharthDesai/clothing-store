import { createContext, useState } from "react";

export const CartContext = createContext({
    toggle: false,
    cartItems: []
});

export const CartProvider = ({children}) => {

    const [toggle, setToggle] = useState(false);

    const value = {toggle, setToggle};

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}