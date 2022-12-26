import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    const { toggle } = useContext(CartContext);

    return(
        
        <div className={`cart-dropdown-container ${toggle ? '' : 'none'}`}>
            <div className='cart-items'>            
            </div>
            <Button>Go TO Checkout</Button>
        </div>
    )
}

export default CartDropdown;