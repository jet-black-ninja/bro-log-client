import { useEffect, useState } from 'react';
import './ReadRandomArticle.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaRandom } from 'react-icons/fa';

export default function ReadRandomArticle() {
    const [articleId, setArticleId] = useState<string | null >(null);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(true);
    }
    
    const fetchArticleId = async ()  => {
        try{
            const serverURL = import.meta.env.VITE_SERVER_URL;
            const res = await axios.get(`${serverURL}/api/articles/random`);
            
            if(res.status===200){
                const data = await res.data;
                setArticleId(data.articleId);
                setButtonClicked(false);
            }else {
                throw new Error (`Server returned ${res.status} ${res.statusText}`);
            }
        }catch(err){
            console.log(err);
        }
    };
    useEffect(() => {
        if(!buttonClicked){
            return ;
        }
    },[buttonClicked]);

    useEffect(() => {
        fetchArticleId();
    },[]);

    return (
        <Link to ={`/article./${articleId}`} className = "randomArticleBtn" onClick={handleClick}>
            Random Article <FaRandom/>
        </Link>
    )
}