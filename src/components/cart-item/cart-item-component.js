import './cart-item-styles.scss';

const CartItem = (props) => {

    const {cartitem} = props;

    return(
        <div className='cart-item-container'>
            <img src={cartitem.imageUrl} alt={`${cartitem.name}`} />
            <div className='item-details'>
                <span className='name'>{cartitem.name}</span>
                <span className='price'>
                {cartitem.quantity} x ${cartitem.price}
                </span>
            </div>
        </div>
    )
}


export default CartItem;