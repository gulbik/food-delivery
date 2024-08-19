
import { BsClockHistory, BsHeart, BsHouseDoorFill, BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-between my-4 me-5 navbar">
            <div className='icon'>
                <BsHouseDoorFill />
            </div>
            <div className='icon'>
                <BsHeart />
            </div>
            <div className='icon' onClick={() => navigate("/profile")}>
                <BsPerson />
            </div>
            <div className='icon' onClick={() => navigate("/history")}>
                <BsClockHistory/>
            </div>
        </div>
    );
}

export default Navbar;