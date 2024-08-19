import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import YellowButton from '../../components/YellowButton';
import BackButton from '../../components/BackButton';
import EmptyPage from '../../components/EmptyPage/EmptyPage';

const Orders: React.FC = () => {

    
    return (
        <div className="action-page">
            <div className="action-page-header">
                <BackButton pageName='Orders'/>
           </div>
            <EmptyPage 
            icon={<FaShoppingCart />} 
            problem='No orders yet'
            problemDescription='Hit the orange button down below to Create an orde'
            />
            <YellowButton label="Start Ordering" />
        </div>
    );
};

export default Orders;
