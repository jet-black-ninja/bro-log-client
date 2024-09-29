import axios from "axios"
import { Dispatch, SetStateAction } from "react"
import {ITag} from "../interfaces/Tag";
export const fetchTagListData  = async (
    setTagList: Dispatch<SetStateAction<ITag[]>> ,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<Error | null>>
) => {
    try {
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const res = await axios.get(`${serverURL}/api/tags`);
        if(res.status===200){
            const data = res.data;
            setTagList(data.tag_list);
        }else{
            throw new Error (`Server Returned ${res.status} ${res.statusText}`)
        }
    }catch(error:any){
        setError(error)
    }
    setLoading(false);
};