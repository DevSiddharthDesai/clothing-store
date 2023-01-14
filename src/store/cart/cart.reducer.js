import CART_ACTION_TYPES from './cart.types';

export const CART_INITIAL_STATE = {
    toggle: false,
    cartItems: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                cartItems: payload
            }
        case CART_ACTION_TYPES.SET_TOGGLE:
            return{
                ...state,
                toggle: payload
            }
        default:
            return{
                ...state
            }
    }
}