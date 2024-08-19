import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BackButton from '../../components/BackButton';
import './Profile.css'
import photo from '../../assets/profile-photo.png'
import EmptyPage from '../../components/EmptyPage/EmptyPage';
import YellowButton from '../../components/YellowButton';
import { BsX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Profile: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate()

    if (!user) {
        return (
            <div className="action-page">
                <BackButton/>
                <EmptyPage icon={<BsX/>} problem="You are not logged in" problemDescription='Please click Login/Signup button'/>
                <YellowButton label='Login/Sign-up' onClick={()=> navigate("/login")}/>
            </div> 

        );
    }
   

    return (
        <>
        <BackButton/>
        <div className="container px-5">
            <h1 className=" mt-5">My profile</h1>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <h6 className="">Personal details</h6>
                <h6 className="text-muted">change</h6>
            </div>

            <section className="card mb-4 p-3 pb-5">
                <div className="d-flex align-items-center">
                    <img src={photo} alt="User Avatar" className="rounded-circle me-3" />
                    <div>
                        <h5 className="mb-1">{user.name}</h5>
                        <p className="mb-1 ">{user.username}</p>
                        <p className="mb-1">{user.phone}</p>
                        <p className="mb-0">{user.address}</p>
                    </div>
                </div>
            </section>
            <button className="btn action-btn">Orders </button>           
        </div>

        </>
    );
};

export default Profile;
