import { BiArrowToRight} from "react-icons/bi"

type LogoutProps = {
    onClick: ()=> void;
}

const Logout: React.FC <LogoutProps> = ({onClick}) => {
    return(
        <div className="logout-btn" onClick={onClick}>
            Sign-out <BiArrowToRight className="logout-icon" />
        </div>
    )
}

export default Logout