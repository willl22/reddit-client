import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Main.css';
import Post from "../../features/Post/Post";
import { 
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments
} from "../../store/redditSlice";
import PostLoading from "../../features/Post/PostLoading";

function Main() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    function onToggleComments(index) {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };
        return getComments;
    }

    if (isLoading) {
        return (
            <PostLoading className= "loadingContainer"/>
        );
    }

    if (error) {
        console.log(error)
        return (
            <h3 className= "errorContainer">Error - failed to load</h3>
        );
    }

    if (posts.length === 0) {
        return (
            <div>
                <h3 className= "noMatchContainer">No posts matching "{searchTerm}"</h3>
                <button type="button" onClick={() => dispatch(setSearchTerm(""))}>
                    Go home
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="postFeed">
            {posts.map((post, index) => (
                <Post
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                    subreddit={post.subreddit}
                />
            ))}  
            </div>
        </div>
    );
};

export default Main;

