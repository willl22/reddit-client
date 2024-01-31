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

function Main() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSortCategory } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSortCategory));
    }, [selectedSortCategory]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };
        return getComments;
    }

    if (isLoading) {
        return (
            <h3>LOADING</h3>
        );
    }

    if (error) {
        return (
            <h3>Error - failed to load</h3>
        );
    }

    if (posts.length === 0) {
        return (
            <h3>No Posts</h3>
        );
    }

    return (
        <div className="postFeed">
           {posts.map((post, index) => (
            <Post
                key={post.id}
                post={post}
                onToggleComments={onToggleComments(index)}
            />
           ))}  
        </div>
    );
};

export default Main;

