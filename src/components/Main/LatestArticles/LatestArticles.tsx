import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import "./LatestArticles.scss"
import { ViewType } from "../../../interfaces/customTypes.ts"
import FilterContext from "../../../contexts/FilterContext.tsx";
import { IArticle } from "../../../interfaces/Article.ts";
import { fetchArticleList } from "../../../helpers/FetchArticleList.ts";
import ArticleFetchingAnimation from "../ArticleFetchingAnimation/ArticleFetchingAnimation.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx";
import ArticleItem from '../ArticlePreview/ArticlePreview.tsx';
import NoArticlePage from "../NoArticlePage/NoArticlePage.tsx";

interface Props {
    setCurrentView: Dispatch<SetStateAction<ViewType | null>>;
}

export default function LatestArticles({ setCurrentView }: Props) {
    const {setFilter} = useContext(FilterContext);
    const [fullArticleList, setFullArticleList] = useState<IArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null >(null);

    useEffect(() => {
        fetchArticleList('latest', setFullArticleList, setLoading, setError);
        setFilter(null);
        setCurrentView('Latest');
        localStorage.setItem('currentView','Latest');
    },[]);

    if(loading){
        return <ArticleFetchingAnimation/>
    }
    if(error){
        return <NotFoundPage setCurrentView={setCurrentView}/>
    }

    return (
        <main className="latest-article-list">
            {fullArticleList.length === 0 && <NoArticlePage /> }
            {fullArticleList?.map((article) => (
            <div key={article._id.toString()} className="article-container">
          <ArticleItem articleData={article} />
        </div>
      ))}
        </main>
    )
}