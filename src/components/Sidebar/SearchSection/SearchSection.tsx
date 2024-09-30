import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FilterContext from "../../../contexts/FilterContext";
import { FaAngleLeft } from "react-icons/fa";
import './SearchSection.scss';

export default function SearchSection() {
    const inputRef  = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    const {filter, setFilter} = useContext(FilterContext);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFilter(inputRef.current!.value);
        navigate('/search');
    };

    useEffect(() => {
        if(!filter){
            inputRef.current!.value = '';
        }
    },[filter]);

    return (
        <div className = "searchbox-container" >
            <div className ="searchbox-heading">Search</div>
            <form className="searchbox" onSubmit={handleSubmit}>
                <input type ="type" className="input" ref ={inputRef} />
                <button type ="submit" className = "search-icon" >
                    <FaAngleLeft/>
                </button>
            </form>
        </div>
    )
}