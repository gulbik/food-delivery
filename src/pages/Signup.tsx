// import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import LoginHeader from "../components/LoginHeader";
import YellowButton from "../components/YellowButton";
import { AppDispatch, RootState } from "../redux/store";
import { signupUser } from "../redux/slice/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Signup: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, error } = useSelector((state: RootState) => state.auth);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
       dispatch(signupUser({ name, phone, address, username, password }));
    };
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className="login-container">
            <LoginHeader active="Signup" />
            <form className="login-form" onSubmit={handleSignup}>
    
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={ name }
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="phone">Your Phone Number</label>
                    <input
                        type="phone"
                        id="phone"
                        value={ phone }
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="address">Delivery Address</label>
                    <input
                        type="text"
                        id="address"
                        value={ address }
                        onChange={(e) => setAddress(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="username">Your username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <YellowButton label="Sign-up" />
            </form>

        </div>
    );
};

export default Signup;
