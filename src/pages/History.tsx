import React from 'react';
import BackButton from '../components/BackButton';
import EmptyPage from '../components/EmptyPage/EmptyPage';
import YellowButton from '../components/YellowButton';
import { FaHistory } from 'react-icons/fa';




const History: React.FC = () => {


    return (
        <div className="action-page">
            <div className="action-page-header">
                <BackButton pageName='History' />
            </div>
            <EmptyPage
                icon={<FaHistory />}
                problem='No history yet'
                problemDescription='Hit the orange button down below to Create an orde'
            />
            <YellowButton label="Start Ordering" />
        </div>
    );
};

export default History;
