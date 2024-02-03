import './PostLoading.css';
import loader from "../../images/loading.gif";

const PostLoading = () => {
    return (
        <div className="loadingContainer">
            <h3>Loading posts...</h3>
            <img src={ loader } alt="loading"/>
        </div>
    )
}

export default PostLoading;