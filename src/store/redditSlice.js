import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getCategoryPosts, getPostComments } from "../api/reddit";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    selectedSortCategory: "Best",
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        loadingPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFail(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSortCat(state, action) {
            state.selectedSortCategory = action.payload;
            state.searchTerm = "";
        },
        toggleComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        },
        startGetComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
              .showingComments;
            if (!state.posts[action.payload].showingComments) {
              return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
    },
});

export const {
    setPosts,
    loadingPosts,
    getPostsSuccess,
    getPostsFail,
    setSearchTerm,
    setSelectedSortCat,
    toggleComments,
    getCommentsFailed,
    getCommentsSuccess,
    startGetComments,
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (category) => async (dispatch) => {
    try {
        dispatch(loadingPosts());
        const posts = await getCategoryPosts(category);

        const postsWithMetadata = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
        }));
        dispatch(getPostsSuccess(postsWithMetadata));
    } catch (error) {
        dispatch(getPostsFail());
    }
};

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommentsSuccess({ index, comments }));
    } catch (error) {
        dispatch(getCommentsFailed(index));
    }
};

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSortCat = (state) => state.reddit.selectedSortCategory;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== "") {
            return posts.filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return posts;
    }
)