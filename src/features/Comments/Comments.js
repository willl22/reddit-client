import React from "react";
import './Comments.css';

function Comments(props) {
    const { comment } = props;

    return (
        <div className="comment">
            <p className="commentAuthor">{comment.author}</p>
            <p className="commentBody">{comment.body}</p>
        </div>
    );
};

export default Comments;