import {format} from "date-fns";
import { IComment } from "../../../../interfaces/Comment";
import "./Comment.scss";

interface Props{
    commentData:IComment;
}

export default function Comment ({commentData}:Props) {
    const {author, text, timestamp} = commentData;

    return (
        <div className="comment" aria-label="Comment">
            <div className="comment-head">
                from: <strong>{author}</strong> on
                {format(new Date(timestamp || ''),' dd. MM. yyyy')}
            </div>
            <p className='comment-text'>
                <em>{text}</em>
            </p>
        </div> 
    )
}