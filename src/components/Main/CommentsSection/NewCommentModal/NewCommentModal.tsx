import { useRef } from "react";
import { useParams } from "react-router-dom";
import './NewCommentModal.scss'
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";
interface Props {
    showModal: boolean;
    closeModal: () => void;
    setRefetchTrigger: (value: React.SetStateAction<boolean>) => void;
}

export default function NewCommentModal({showModal, closeModal, setRefetchTrigger}:Props) {
    const params = useParams();
    const id: string | undefined = params.id;
    const usernameRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const author = usernameRef.current?.value;
        const text = textRef.current?.value;

        if(!author || !text ){
            alert('Both the author and text field required');
            return ;
        }
        try{
            const serverURL = import.meta.env.VITE_SERVER_URL;
            const response = await axios.post(`${serverURL}/api/articles/${id}/comment`,{
                author,
                text
            });
            const data = await response.data;
            console.log(data);
            setRefetchTrigger(true);
            usernameRef.current.value = "";
            textRef.current.value= "";
        }catch(error){
            console.error(error);
        }
        closeModal();
    }


    return (
        <div className ={`modal-overlay${showModal ? ' fade-in' : ' fade-out'}`} >
            <div className='modal-content'>
                <h2>Add Comment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type='text' id='author' ref={usernameRef} required/>
                        <label htmlFor='author'>Name (required)</label> 
                    </div>
                    <div className="input-container">
                        <input type ='text' id = 'text' ref={textRef} required/>
                        <label htmlFor="text" >Comment (required)</label>
                    </div>
                    <button type ="submit">
                        Submit<FaCheck/>
                    </button>
                </form>
                <button className="closeBtn" onClick={closeModal} aria-label="close-modal">
                    <FaTimes/>
                </button>
            </div>
        </div>
    )
}