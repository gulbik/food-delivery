import "./FoodPage.css"
import { FaArrowLeft } from "react-icons/fa";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import YellowButton from "../../components/YellowButton";
import { addToCart } from "../../redux/cartActions";
import { BsHeart } from "react-icons/bs";
import { useEffect } from "react";
import { fetchMenu } from "../../redux/slice/menuSlice";


const FoodPage: React.FC= () => {
    const dispatch = useDispatch<AppDispatch>();

    const { id } = useParams<{ id: string }>();
    const foodItem = useSelector((state: RootState) => 
        state.menu.items.find(item => item.id == (id))
    );

    useEffect(() => {
        if (!foodItem) {
            dispatch(fetchMenu());
        }
    }, [dispatch, foodItem]);

    if (!foodItem) {
        return ;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(foodItem))
    }
    
    return (
        <div className=" food-page">
            <Header leftIcon={<FaArrowLeft />} leftIconPath="/" rightIcon={< BsHeart />} rightIconPath="/" />
            
            <div className="text-center">
                <div className="food-page-image">
                    <img src={foodItem.image} alt="Food Image"/>
                </div>
                <div className="food-page-details">
                    <h2>{foodItem.name}</h2>
                    <p className="price">Rs {foodItem.price}</p>
                </div>
            </div>

            <div className="delivery-info">
                <h3>Delivery Info</h3>
                <p>Delivered between monday aug and thursday 20 from 8pm to 9:32 pm</p>
            </div>
            <div className="delivery-info mb-5">
                <h3>Return Policy</h3>
                <p>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</p>
            </div>

            <YellowButton label="Add to Cart" onClick={handleAddToCart}/>
        </div>
    )}


export default FoodPage