import {CartItemContainer, ImageItem, ItemDetails, NameItem} from './cart-item-styles';

const CartItem = ({cartitem}) => {

    const {imageUrl, name, quantity, price} = cartitem;

    return(
        <CartItemContainer>
            <ImageItem src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <NameItem>{name}</NameItem>
                <span className='price'>{quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
}


export default CartItem;