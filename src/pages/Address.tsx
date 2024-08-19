import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import BackButton from '../components/BackButton';
import YellowButton from '../components/YellowButton';
import EmptyPage from '../components/EmptyPage/EmptyPage';
import { BsX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Address: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate()

    if (!user) {
        return (
            <div className="action-page">
                <BackButton />
                <EmptyPage icon={<BsX />} problem="You are not logged in" problemDescription='Please click Login/Signup button' />
                <YellowButton label='Login/Sign-up' onClick={() => navigate("/login")} />
            </div>

        );
    }


    return (
        <div className='action-page'>

            <BackButton pageName='Address' />
            <div className="container px-5 h-100">
                <h1 className=" mt-5">Delivery</h1>

                <div className="d-flex justify-content-between align-items-center mt-5">
                    <h6 >Address details</h6>
                    <h6 className="text-muted">change</h6>
                </div>

                <section className="card mb-4 p-3 ">
                    <div className="d-flex flex-column">
                        <h5 className="mb-3">{user.name}</h5>
                        <hr className='w-75' />
                        <p className="my-2">{user.phone}</p>
                        <hr className='w-75'/>
                        <p className="my-2">{user.address}</p> 
                    </div>
                </section>
                
            </div>
            <YellowButton label='Confirm Address' onClick={() => navigate("/checkout")}/>

        </div>
    );
};

export default Address;
