import React from "react";
import Comments from "../Comments/Comments";
import './Post.css';

function Post() {
    return (
        <div className="postContainer">
            <h2 className="postTitle">Post Title</h2>
            <p className="postContent">Post content</p>
            <div className="postFooter">
                <p>author</p>
                <p>subreddit</p>
                <Comments />
            </div>
        </div>
    );
};

export default Post;