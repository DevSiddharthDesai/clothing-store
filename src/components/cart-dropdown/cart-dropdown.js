import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button';
import {CartContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item-component';

const CartDropdown = () => {

    const { toggle, cartItems, total } = useContext(CartContext);

    return(
        
        <CartContainer toggled={toggle}>
            <CartItems> 
                {cartItems ? cartItems.map((item) => {
                    return <CartItem cartitem={item} />
                }): ''}           
            </CartItems>
            Total: {total}
            <Link to='checkout'><Button>Go TO Checkout</Button></Link>
        </CartContainer>
    )
}

export default CartDropdown;