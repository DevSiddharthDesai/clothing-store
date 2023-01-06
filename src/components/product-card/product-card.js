import {useContext} from 'react';
import './product-card.styles.scss';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {

  const { name, price, imageUrl } = product;

  const {cartItems, setCartitems, addItemToCart} = useContext(CartContext);

  const AddtoCartHandler = () => {
    addItemToCart(product);
  }

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={AddtoCartHandler}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;