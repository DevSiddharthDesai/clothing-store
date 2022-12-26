import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {

    const {toggle, setToggle} = useContext(CartContext);

    console.log("After", toggle);

    const handleCartToggle = () => {
        {toggle ? setToggle(false) : setToggle(true)}   
    }
    
    return (
        
        <div className='cart-icon-container' onClick={handleCartToggle}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;