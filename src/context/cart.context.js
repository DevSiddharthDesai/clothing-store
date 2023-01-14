import { createContext, useReducer } from "react";

// Add Cart Item Func
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

// Remove Cart Item Func
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

// Clear Cart Item Func
const ClearFromCart = (cartItems, productToClear) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToClear.id
    );

    if(existingCartItem){
        return cartItems.filter(cartitem => cartitem.id !== productToClear.id);
    };
}


// Create Cart Context
export const CartContext = createContext({
    toggle: false,
    cartItems: [],
    cartQty: 0,
    total: 0,
    addItemToCart: () => {},
    RemoveFromCart: () => {},
    ClearFromCart: () => {}
});

// Create Cart Context Types
export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS'
};

// Create Cart Reducer
const cartReducer = (state, action) => {
    
    const { type, payload } = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_TOGGLE:
            return{
                ...state,
                toggle: payload
            }
        default:  
            throw new Error(`Unhandled type ${type} in CartReducer`);
    }
}

// Create Cart Initial State
export const INITIAL_STATE = {
    toggle: false,
    cartItems: [],
    cartQty: 0,
    carttotal: 0,
}

// Create Cart Provider func
export const CartProvider = ({children}) => {
    
    // const [toggle, setToggle] = useState(false);

    const [{cartItems, cartQty, carttotal, toggle}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

        const newCarttotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {
            cartItems: newCartItems, 
            carttotal: newCarttotal, 
            cartQty: newCartCount
        }});

    }

    const addItemToCart = (productToadd) => {
        const additems = addCartItem(cartItems, productToadd);
        updateCartItemReducer(additems);
    }

    const removeItemFromCart = (productToRemove) => {
        const removeitems = RemoveFromCart(cartItems, productToRemove);
        updateCartItemReducer(removeitems);
    }

    const clearItemFromCart = (productToClear) => {
        const clearitem = ClearFromCart(cartItems, productToClear);
        updateCartItemReducer(clearitem);
    }

    const setToggle = (bool) => {
        dispatch({type: CART_ACTION_TYPES.SET_TOGGLE, payload: bool})
    }

    const value = {
        toggle,  
        cartItems, 
        cartQty,
        carttotal,
        setToggle,
        addItemToCart,
        removeItemFromCart, 
        clearItemFromCart
    };

    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}