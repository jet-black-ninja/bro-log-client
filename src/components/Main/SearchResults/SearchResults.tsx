import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import "./SearchResults.scss";
import { ViewType } from "../../../interfaces/customTypes";
import FilterContext from "../../../contexts/FilterContext";
import {IArticle} from '../../../interfaces/Article';
import { fetchArticleList } from "../../../helpers/FetchArticleList";
import { filterArticles } from "../../../helpers/FilterArticles";
import ArticleFetchingAnimation from "../ArticleFetchingAnimation/ArticleFetchingAnimation";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NoArticlePage from "../NoArticlePage/NoArticlePage";
import ArticleItem from '../ArticlePreview/ArticlePreview';
interface Props {
    setCurrentView: Dispatch<SetStateAction<ViewType | null >>;
}

export default function SearchResults({setCurrentView}:Props) {
    const {filter} = useContext(FilterContext);
    const [activeArticleList, setActiveArticleList] = useState<IArticle[]>([]);
    const [fullArticleList, setFullArticleList] = useState<IArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null >(null);

    useEffect(() => {
        fetchArticleList('all', setFullArticleList, setLoading, setError);
        setCurrentView('Other');
        localStorage.setItem('currentView','Other');
    },[]);

    useEffect(() => {
        filterArticles(filter, fullArticleList, setActiveArticleList);
    },[filter, fullArticleList]);

    if(loading){
        return <ArticleFetchingAnimation />
    }
    if(error) {
        return <NotFoundPage setCurrentView={setCurrentView} />
    }
    
    return (
        <main className="search-results-list">
            {activeArticleList.length === 0 && <NoArticlePage />}
            {activeArticleList?.map((article) => (
                <div key = {article._id.toString()} className="article-container" >
                    <ArticleItem articleData = {article} />
                </div>
            ))}
        </main>
    )
}