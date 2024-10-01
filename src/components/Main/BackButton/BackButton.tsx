import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.scss";

export default function BackButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }

    return (
        <button className="backBtn" onClick={handleClick}>
            <FaArrowLeft />Go Back
        </button>
    )
}