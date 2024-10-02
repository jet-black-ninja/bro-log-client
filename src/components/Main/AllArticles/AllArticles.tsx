import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import './AllArticles.scss';
import { ViewType } from '../../../interfaces/customTypes';
import FilterContext from '../../../contexts/FilterContext';
import { IArticle } from '../../../interfaces/Article';
import { fetchArticleList } from '../../../helpers/FetchArticleList';
import ArticleFetchingAnimation from '../ArticleFetchingAnimation/ArticleFetchingAnimation';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import NoArticlePage from '../NoArticlePage/NoArticlePage';
import ArticleItem from "../ArticlePreview/ArticlePreview"

interface Props {
    setCurrentView: Dispatch<SetStateAction<ViewType | null>>;
}

export default function AllArticles({setCurrentView}:Props) {
    const {setFilter} = useContext(FilterContext);
    const [fullArticleList, setFullArticleList] =  useState<IArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null >(null);

    useEffect(() => {
        fetchArticleList('all', setFullArticleList, setLoading, setError);
        setFilter(null);
        setCurrentView('All');
        localStorage.setItem('currentView','All');
    },[]);

    if(loading){
        return <ArticleFetchingAnimation />
    }
    if(error) {
        return <NotFoundPage setCurrentView={setCurrentView}/>
    }

    return (
        <main className='all-article-list' >
            {fullArticleList.length===0 && <NoArticlePage />}
            {fullArticleList?.map((article) => (
                <div key = {article._id.toString()} className='article-container'>
                    <ArticleItem articleData={article} />
                </div>
            ))}
        </main>
    )
}