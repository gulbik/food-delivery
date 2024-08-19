import React from 'react';
import { Link } from 'react-router-dom';

interface FoodCardProps {
    id: string;
    name: string;
    image: string;
    price: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ id, name, image, price }) => {

    return (
        <Link to={`/menu/${id}`} key={id} className="food-item">
            <div className="food-card col-md-12 align-self-stretch ">
            <div className="food-image">
                <img src={image} alt={name} />
            </div>
            <div className="food-details">
                <h2>{name}</h2>
                <p className="price">Rs {price}</p>
            </div>
        </div>
        </Link>
    );
};

export default FoodCard;
