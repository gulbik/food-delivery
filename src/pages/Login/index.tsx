import YellowButton from "../../components/YellowButton";
import './Login.css';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../../components/LoginHeader";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const { user, error } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser({ username, password }));
    };
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);
    
    return (
        <div className="login-container">
            <LoginHeader active="Login"/>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="example@gmail.com"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
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
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <YellowButton label="Login"/>
            </form>
            
        </div>
    );
};

export default Login;
