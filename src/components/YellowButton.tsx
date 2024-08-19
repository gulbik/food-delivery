import React from "react";

type YellowButtonProps = {
    label: string;
    onClick?: () => void;
}
const YellowButton: React.FC <YellowButtonProps> = ({ label, onClick }) => {
    return(
        <button className="yellow-btn mx-auto d-block mt-auto" onClick={onClick}>
            {label}
        </button>
    )
}

export default YellowButton