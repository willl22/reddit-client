import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";

function SearchBar() {
    const [searchTermLocal, setSearchTermLocal] = useState("");
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = ({ target }) => {
        setSearchTermLocal(target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    return (
        <div className="searchBar">
            <form className="searchForm" onSubmit={onSearchTermSubmit}>
                <input 
                    type="text"
                    placeholder="Search Posts" 
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label="search posts"
                />
                <button 
                    type="submit"
                    onClick={onSearchTermSubmit}
                    className="searchButton"
                    aria-label="Search"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
