import { MagnifyingGlass } from "react-loader-spinner";
import './ArticleFetchingAnimation.scss';

export default function ArticleFetchingAnimation() {
    return (
        <div className="fetching">
            <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="loading data"
            wrapperClass="loading-spinner"
            wrapperStyle={{}}
            glassColor="#c0efff"
            color="#e15b64"
            />
        </div>
    )
}