import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
type PageProps = {
    pageName? : string;
}
const BackButton: React.FC<PageProps> = ({ pageName }) => {
    const navigate = useNavigate();
    return (
        <div className="action-page-header">
            <div className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft/>
            </div>
            <h1>{pageName}</h1>
        </div>
        
        
    )
}


export default BackButton