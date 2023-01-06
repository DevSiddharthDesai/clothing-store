import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {CartIconContainer, ShoppingIconContainer, ItemCount} from './cart-icon.styles';

const CartIcon = () => {

    const {toggle, setToggle, cartQty} = useContext(CartContext);

    const handleCartToggle = () => {
        {toggle ? setToggle(false) : setToggle(true)}   
    }
    
    return (
        
        <CartIconContainer onClick={handleCartToggle}>
            <ShoppingIconContainer />
            {/* <ShoppingIcon className='shopping-icon' /> */}
            <ItemCount>{cartQty}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;