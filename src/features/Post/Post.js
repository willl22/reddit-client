import React from "react";
import Comments from "../Comments/Comments";
import './Post.css';

function Post(props) {

    const { post, onToggleComments } = props;

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
            <img src={post.url} alt="" className="postImage" />

            <div className="postFooter">
                <p>{post.author}</p>
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