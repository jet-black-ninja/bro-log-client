import axios from "axios";
import { IArticle } from "../interfaces/Article";
import { Dispatch, SetStateAction } from "react";
export const fetchArticleList = async(
    endpoint: string,
    setFullArticleList: Dispatch<SetStateAction<IArticle[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>,  
    setError: Dispatch<SetStateAction<Error | null>>
) => {
    try{ 
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const res = await axios.get(`${serverURL}/api/articles/${endpoint}`);
        if(res.status === 200){
            const data = res.data;
            setFullArticleList(data.article_list);
        }else {
            throw new Error (`Server Returned ${res.status} ${res.statusText}`);
        }

    }catch(error:any){
        setError(error)
    }
    setLoading(false);
}