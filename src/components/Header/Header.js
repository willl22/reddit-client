import React from "react";
import SearchBar from "../../features/SearchBar/SearchBar";
import "./Header.css";
import { useDispatch } from "react-redux";
import { setSelectedSubreddit } from "../../store/redditSlice";

function Header() {
    const dispatch = useDispatch();

    return (
        <div className="headerContainer">
            <SearchBar />
            <h1 
                className="logo"
                onClick={() => dispatch(setSelectedSubreddit(`/r/popular`))}
            >
                <span className="emphasis">Not</span>Reddit
            </h1>
        </div>
        
    );
};

export default Header;