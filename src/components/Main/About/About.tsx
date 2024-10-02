import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { ViewType } from "../../../interfaces/customTypes";
import FilterContext from "../../../contexts/FilterContext";
import BackButton from "../BackButton/BackButton";
import './About.scss';
interface Props{
    setCurrentView: Dispatch<SetStateAction<ViewType| null>>;
}
export default function About ({setCurrentView}:Props) {
     const {setFilter}=useContext(FilterContext);
     useEffect(() => {
        setCurrentView('About')
        localStorage.setItem('currentView','About');
        setFilter(null);
     },[]);

     return(
        <main className='about-container'>
            <h1> About This Blog</h1>
            <p>
                Welcome to Bro-log! I am Sachin, a self-taught developer and writer with a passion for
                learning and sharing my knowledge with others. I have created this platform to share my
                thoughts, ideas, and experiences on a variety of topics such as Video games, working out,
                 bikes , cars etc .
            </p>
            <p>
                I built this blog using React on the frontend and created a self-coded REST API with Express
                and MongoDB on the backend. I have also coded a CMS to provide the content you see here.
            </p>
            <p>
                I believe in providing my readers with a seamless and personalized experience, that's why
                I've integrated features like commenting, keyword search, and article filtering by tags. My
                readers can also change the theme of the website to suit their preferences.
            </p>
            <p>
                I hope you find my blog informative, engaging, and thought-provoking. I welcome your
                comments and feedback and look forward to hearing from you. Thank you for visiting my blog!
            </p>
            <div>
        The source-code for the frontend, backend as well as the CMS can be found on GitHub.
        <ul>
            <li>
                <a href="https://github.com/jet-black-ninja/bro-log-client" target="_blank" rel="noreferrer">
                Blog-Client
                </a>
            </li>
            <li>
                <a href="https://github.com/jet-black-ninja/brolog-api" target="_blank" rel="noreferrer">
                Blog-Rest-API
                </a>
            </li>
            <li>
                <a href="https://github.com/jet-black-ninja/brolog-admin-fp" target="_blank" rel="noreferrer">
                Blog-Content-Management-System
                </a>
            </li>
        </ul>
        </div>
        <BackButton/>
        </main>
     )
}