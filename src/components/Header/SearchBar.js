import React from "react";
import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="searchBar">
            <input placeholder="Search Reddit" />
            <button className="searchButton">Search</button>
        </div>
    );
};

export default SearchBar;
