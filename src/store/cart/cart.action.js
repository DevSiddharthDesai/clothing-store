import CART_ACTION_TYPES from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

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
export const setToggle = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_TOGGLE, boolean);
        
export const addItemToCart = (cartItems, productToadd) => { 
    const Newitems = addCartItem(cartItems, productToadd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, Newitems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const Newitems = RemoveFromCart(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, Newitems);
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const Newitems = ClearFromCart(cartItems, productToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, Newitems);
}