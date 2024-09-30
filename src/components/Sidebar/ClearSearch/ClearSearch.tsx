import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FilterContext from "../../../contexts/FilterContext";
import { FaUndoAlt } from "react-icons/fa";
import './ClearSearch.scss'

export default function ClearSearch() {
    const {setFilter} = useContext(FilterContext);
    const navigate = useNavigate();
    const handleClearClick = () => {
        setFilter (null);
        navigate('/all');
    }
    return (
        <button className = "clear-search-button" onClick={handleClearClick}>
            <span>Clear Filter</span> <FaUndoAlt className ='remove-filter-icon'/>
        </button>
    )
}