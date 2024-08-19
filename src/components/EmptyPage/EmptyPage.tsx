import React from 'react';
import './EmptyPage.css';


type EmptyPageProops = {
    icon?: React.ReactNode;
    problem : string;
    problemDescription : string;
}

const EmptyPage: React.FC<EmptyPageProops> = ({icon, problem, problemDescription}) => {


    return (
        <div className="orders-content my-auto mx-auto">
            <span className="cart-icon">{icon}</span>
            <h2>{problem}</h2>
            <p>{problemDescription}</p>
        </div>     
    );
};

export default EmptyPage;
