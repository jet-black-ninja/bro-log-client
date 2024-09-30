import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterContext from "../../../contexts/FilterContext";
import {ITag} from '../../../interfaces/Tag';
import { fetchTagListData } from "../../../helpers/FetchTagListData";
import './TagsSection.scss';

export default function TagsSection () {
    const {filter, setFilter} = useContext(FilterContext);
    const [tagList, setTagList] = useState<ITag[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();

    const handleTagClick = (tag: ITag) => {
        if(tag!=filter){
            navigate('/search');
        }else {
            setFilter(null);
            navigate(-1);
        }
    }

    useEffect(() => {
        fetchTagListData(setTagList, setLoading, setError);
    },[]);

    if(loading){
        return <div>Loading ....</div>
    }
    if(error) {
        return <p>An error occurred : {error.message} </p> 
    }

    return (
        <div className="tag-section">
            <h1 className="side-tag-heading" aria-label="List of all tags">
                All Tags
            </h1>
            <ul className="side-tag-list" >
                {tagList?.map((tag:ITag) => (
                    <li 
                    key = {tag._id.toString()}
                    className ={`side-tag-list-item ${filter == tag ? 'active' : '' }`}
                    onClick={() => {
                        setFilter(tag);
                        handleTagClick(tag);
                    }}
                    role='button'
                    tag-index ={0}>
                        {tag.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}