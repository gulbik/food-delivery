import "./Cart.css";
import CartItem from "../../components/CartItem"
import BackButton from "../../components/BackButton";
import YellowButton from "../../components/YellowButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";


const Cart: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();

    return(
        <div className="action-page">
            <div className="action-page-header">
                <BackButton pageName='Cart' />
            </div>

            {cart.items.map((item) => (
                <CartItem key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} quantity={item.quantity}/>
            ))}
            <YellowButton label="Order Now" onClick={()=>navigate("/address")}/>
        </div>
    )
}

export default Cart;