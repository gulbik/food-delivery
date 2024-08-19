import { useNavigate } from "react-router-dom";

type HeaderProps = {
    leftIcon: React.ReactNode;
    leftIconPath: string;
    rightIcon: React.ReactNode; 
    rightIconPath: string;
}
const Header: React.FC <HeaderProps> = ({leftIcon, leftIconPath, rightIcon, rightIconPath}) => {
    const navigate = useNavigate();

    return (
        <header className="d-flex justify-content-between mt-5 mb-3">
            <div onClick={() => navigate(leftIconPath)} >
                <span className="header-icon">{leftIcon}</span>
            </div>
            <div className="me-4" onClick={() => navigate(rightIconPath)}>
                <span className="header-icon">{rightIcon}</span>
            </div>               
        </header>
    )
}

export default Header;