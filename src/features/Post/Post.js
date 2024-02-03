import React from "react";
import Comments from "../Comments/Comments";
import './Post.css';
import { setSelectedSubreddit } from "../../store/redditSlice";
import { useDispatch } from "react-redux";

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
                <h3>loading</h3>
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
                    className="linkToPost"
                >
                    See full post
                </a>
            </div>

            <div className="postFooter">
                <p className="author">{post.author}</p>
                <p 
                    className="subreddit"
                    onClick={() => dispatch(setSelectedSubreddit(`/r/${subreddit}`))}
                >
                    {subreddit}
                </p>
                <button
                    type="button"
                    className="commentsButton"
                    onClick={() => onToggleComments(post.permalink)}
                    aria-label="Show comments"
                >
                    Comments
                </button>
            </div>
            {renderComments()}
        </div>
    );
};

export default Post;