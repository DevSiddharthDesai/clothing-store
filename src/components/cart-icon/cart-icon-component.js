import { useSelector, useDispatch } from 'react-redux';
import {CartIconContainer, ShoppingIconContainer, ItemCount} from './cart-icon.styles';
import {selectCartItems, selectToggle, selectCartCount} from '../../store/cart/cart.selector';
import {setToggle} from '../../store/cart/cart.action';

const CartIcon = () => {

    const dispatch = useDispatch();

    const select_toggle = useSelector(selectToggle);
    const selectcartitems = useSelector(selectCartItems);
    const selectcartcount = useSelector(selectCartCount);

    const handleCartToggle = () => { 
    {select_toggle ? dispatch(setToggle(false)) : dispatch(setToggle(true))}   
    }
    
    
    return (
        
        <CartIconContainer onClick={handleCartToggle}>
            <ShoppingIconContainer />
            {/* <ShoppingIcon className='shopping-icon' /> */}
            <ItemCount>{selectcartcount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;