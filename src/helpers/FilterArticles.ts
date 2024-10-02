import {IArticle} from '../interfaces/Article';
import {ITag} from "../interfaces/Tag"
import { Dispatch, SetStateAction } from 'react';

export const filterArticles = (
    filter: ITag | string | null,
    fullArticleList: IArticle[],
    setActiveArticleList : Dispatch<SetStateAction<IArticle[]>>,
) => {
    let filtered = fullArticleList;

    if(typeof filter ==='string'){
        const filterLower = filter.toLowerCase();

        filtered = fullArticleList.filter(({title, content} )=> {
            const titleWords = title.toLowerCase().split(' ');
            const contentWords = content.toLowerCase().split(' ');
            return titleWords.includes(filterLower) || contentWords.includes(filterLower);
        })
    }else if(filter){
        filtered = fullArticleList.filter(({tags = []}) => {
            tags.some(({_id}) => _id === filter._id)
        })
    }
    setActiveArticleList(filtered);
}