import React from "react";
import { FaFileAlt, FaShieldAlt, FaShoppingCart, FaTag, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import  "./ProofileMenu.css";
import BackButton from "../../components/BackButton";
import Logout from "../../components/Logout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logout } from "../../redux/slice/authSlice";


const menuItems = [
    { icon: <FaUser className="menu-icon" />, label: 'Profile', path: '/profile' },
    { icon: <FaShoppingCart className="menu-icon" />, label: 'Orders', path: '/orders' },
    { icon: <FaTag className="menu-icon" />, label: 'Offer and Promo', path: '/' },
    { icon: <FaFileAlt className="menu-icon" />, label: 'Privacy Policy', path: '/' },
    { icon: <FaShieldAlt className="menu-icon" />, label: 'Security', path: '/' },
];

const ProfileMenu:  React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()

    const handleNavigation = (path: string) => {
        navigate(path);
    };
    const handleLogout = () =>{
        dispatch(logout());
        navigate("/login")
    }
    return (
        <div className="profile-menu">
            <BackButton />   

            <ul className="menu-list">
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <li className="menu-item" onClick={() => handleNavigation(item.path)}>
                            {item.icon}
                            <span>{item.label}</span>
                        </li>
                        {index < menuItems.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </ul>

            <Logout onClick={handleLogout}/>
        </div>
    )
}

export default ProfileMenu