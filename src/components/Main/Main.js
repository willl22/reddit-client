import React from "react";
import './Main.css';
import Post from "../../features/Post/Post";

function Main() {
    return (
        <div className="postFeed">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Main;

