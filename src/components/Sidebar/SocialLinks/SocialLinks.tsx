import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./SocialLinks.scss";

export default function SocialLinks (){
    const handleGithubClick = () => {
        window.open('http://github.com/jet-black-ninja',"_blank");
    }
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/sachin-kumar-singh-133717c/', "_blank");
    }
    return (
        <div className = "socialBtn" >
            <button aria-label="Github Link" onClick = {handleGithubClick}>
                <FaGithub/>
            </button>
            <a className = "mailto" href ="mailto:sachinkmrsin@gmail.com" aria-label="Email Link" >
                {' '}
                <FaEnvelope/>
            </a>
            <div className = "linkedIn">
                <button aria-label="LinkedIn Link" onClick = {handleLinkedInClick}>
                    <FaLinkedin />
                </button>
            </div>
        </div>
    )
}