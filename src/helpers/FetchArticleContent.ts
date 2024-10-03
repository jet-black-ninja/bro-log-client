import axios from 'axios';

export const fetchArticleContent = async (
    id: string | undefined,
    setArticle?: Function,
    setLoading?: Function, 
    setError?: Function
) => {
    try {
        const serveURL = import.meta.env.VITE_SERVER_URL;
        const res = await axios.get(`${serveURL}/api/articles/${id}`);
        if(res.status ===200){
            if(setArticle){
                setArticle(res.data.article);
            }
        } else {
            throw new Error(`Server returned ${res.status} ${res.statusText}`);
        }
    } catch(err) {
        if(setError){
            setError(err);
        }
    } finally {
        if(setLoading){
            setLoading(false);
        }
    }
}