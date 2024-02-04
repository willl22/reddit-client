import React from "react";
import Comments from "../Comments/Comments";
import './Post.css';
import { setSelectedSubreddit } from "../../store/redditSlice";
import { useDispatch } from "react-redux";
import redditIcon from "../../images/icons8-reddit-64.png";
import commentIcon from "../../images/icons8-comment-50.png";
import loader from "../../images/loading.gif";

function Post(props) {

    const { post, onToggleComments, subreddit } = props;
    const dispatch = useDispatch();

    const renderComments = () => {
        if (post.errorComments) {
            return (
                <h3>error loading comments</h3>
            );
        }

        if (post.loadingComments) {
            return (
                <div className="commentsLoadingContainer">
                    <h3 className="commentsLoadingText">loading...</h3>
                    <img src={ loader } alt="loading" className="commentsLoadingGif"/>
                </div>
            );
        }

        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comments comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }

        return null;
    }



    return (
        <div className="postContainer">
            <h2 className="postTitle">{post.title}</h2>
            
            <div className="postBody">
                <img src={post.url} alt="" className="postImage" />
                <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="linkToPost"
                >
                    See full post
                </a>
            </div>

            <div className="postFooter">
                <p className="author">
                    <img
                        src={ redditIcon }
                        className="redditIcon"
                        alt="userIcon"
                    />
                    {post.author}
                </p>
                <p 
                    className="subreddit"
                    onClick={() => dispatch(setSelectedSubreddit(`/r/${subreddit}`))}
                >
                    /r/{subreddit}
                </p>
                <button
                    type="button"
                    className="commentsButton"
                    onClick={() => onToggleComments(post.permalink)}
                    aria-label="Show comments"
                >
                    <img
                        src={commentIcon}
                        alt="comments"
                        className="commentIcon"
                    />
                </button>
            </div>
            {renderComments()}
        </div>
    );
};

export default Post;