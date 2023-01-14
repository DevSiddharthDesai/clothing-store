import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => {
        const cartItems = cart.cartItems;
        return cartItems;
    }
);

export const selectToggle = createSelector(
    [selectCartReducer],
    (cart) => {
        const toggle = cart.toggle;
        return toggle;
    }
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => {        
        const cartQty = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        )
       return cartQty;
    }
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);