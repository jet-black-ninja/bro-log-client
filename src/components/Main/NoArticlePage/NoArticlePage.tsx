import { FaRegThumbsDown } from "react-icons/fa";
import './NoArticlePage.scss';

export default function NoArticlePage() {
    return(
        <div className ="no_article" aria-live='assertive'>
            No articles Found <FaRegThumbsDown/>
        </div>
    )
}