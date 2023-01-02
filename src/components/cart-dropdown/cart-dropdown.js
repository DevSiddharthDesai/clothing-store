import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item-component';

const CartDropdown = () => {

    const { toggle, cartItems, total } = useContext(CartContext);

    return(
        
        <div className={`cart-dropdown-container ${toggle ? '' : 'none'}`}>
            <div className='cart-items'> 
                {cartItems ? cartItems.map((item) => {
                    return <CartItem cartitem={item} />
                }): ''}           
            </div>
            Total: {total}
            <Button>Go TO Checkout</Button>
        </div>
    )
}

export default CartDropdown;