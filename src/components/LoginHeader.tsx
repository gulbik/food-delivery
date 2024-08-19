import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

type LoginHeaderProps ={
    active: "Login" | "Signup";
}
const LoginHeader: React.FC<LoginHeaderProps> = ({active}) => {
    const navigate = useNavigate()
    return (
        <div className="login-signup">
            <div className="login-logo">
                <img src={logo} alt="Aptech Logo" />
            </div>
            <div className="login-tabs">
                <button 
                    className={`${active === "Login" ? 'active' : ''}`}
                    onClick={()  => navigate("/login")}
                >
                    Login
                </button>
                <button
                    className={`${active === "Signup" ? 'active' : ''}`}
                    onClick={() => navigate("/signup")}>
                    Sign-up
                </button>
            </div>
        </div>
    )
}

export default LoginHeader