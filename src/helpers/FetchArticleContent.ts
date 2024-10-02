import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { IArticle } from "../interfaces/Article";
export const fetchArticleContent=  async(
    id: string,
    setArticle:Dispatch<SetStateAction<IArticle>>,
    setLoading:Dispatch<SetStateAction<boolean>>,
    setError:Dispatch<SetStateAction<Error | null>>,
) => {
    try {
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const res = await axios.get(`${serverURL}/api/articles/${id}`);
        
        if(res.status === 200){
            const data = res.data;
            if(setArticle){
                setArticle(data.article)
            }
        }else {
            throw new Error(`Server Returned ${res.status} ${res.statusText}`);
        }
    }catch(error:any) {
        setError(error);
    }finally{
        setLoading(false);
    }
}