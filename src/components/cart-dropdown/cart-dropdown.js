import { Link } from 'react-router-dom';
import {selectCartItems, selectToggle, selectCartTotal} from '../../store/cart/cart.selector';
import Button from '../button/button';
import {CartContainer, CartItems} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item-component';
import { useSelector } from 'react-redux';

const CartDropdown = () => {

    const select_toggle = useSelector(selectToggle);
    const selectcartitems = useSelector(selectCartItems);
    const selectcarttotal = useSelector(selectCartTotal);

    return(
        <CartContainer toggled={select_toggle}>
            <CartItems> 
                {selectcartitems ? selectcartitems.map((item) => {
                    return <CartItem cartitem={item} />
                }): ''}           
            </CartItems>
            Total: {selectcarttotal}
            <Link to='checkout'><Button>Go TO Checkout</Button></Link>
        </CartContainer>
    )
}

export default CartDropdown;