import { SetStateAction, useState } from "react";
import { IComment } from "../../../interfaces/Comment";
import NewCommentModal from "./NewCommentModal/NewCommentModal";
import Comment from "./Comment/Comment";
import { FaRegCommentAlt } from "react-icons/fa";
import './CommentsSection.scss';

interface Props {
    commentList:IComment[];
    setRefetchTrigger: (value: SetStateAction<boolean>) => void;
}

export default function CommentsSection({ commentList, setRefetchTrigger }: Props) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    if(commentList.length ===  0){
        return (
            <div className ="comment-section">
                <h2>No comments</h2>
                <button className="add-comment-button" onClick={openModal}>
                    Add comment <FaRegCommentAlt/>
                </button>
                <NewCommentModal
                showModal={showModal}
                closeModal={closeModal}
                setRefetchTrigger={setRefetchTrigger}
                />
            </div>
        );
    }else {
        return (
        <div className="comment-section">
            <h2>{commentList.length} Comments</h2>
            <button className="add-comment-button" onClick={openModal} >
                Add Comment <FaRegCommentAlt/>
            </button>
            <NewCommentModal
            showModal={showModal}
            closeModal={closeModal}
            setRefetchTrigger={setRefetchTrigger}
            />
            {commentList?.map((comment)=> (
                <div key = {comment._id.toString()}>
                    <Comment commentData={comment}/>
                </div>
            ))}
        </div>
        )
    };
}