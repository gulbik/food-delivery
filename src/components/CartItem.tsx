
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartActions";
import {  BsFillXCircleFill } from "react-icons/bs";

type CartItemProps = {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
}
const CartItem: React.FC<CartItemProps> = ({id, name, image, price, quantity}) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="cart-item">
            <img src={image} alt="Food Image" className="cart-item-img" />
            <div className="cart-item-details">
                <h3>{name}</h3>
                <p className="cart-item-price">{price.toLocaleString()}</p>
            </div>
            <div className="quantity-control">
                <button className="quantity-btn" onClick={() => dispatch(decreaseQuantity(id))}>-</button>
                <span>{quantity}</span>
                <button className="quantity-btn" onClick={() => dispatch(increaseQuantity(id))}>+</button>
            </div>
            <div className="cart-item-remove" onClick={() => dispatch(removeFromCart(id))}>
                <BsFillXCircleFill/>
            </div>
        </div>
    )
}

export default CartItem