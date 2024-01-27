import React from "react";
import SortBy from "../../features/SortBy/SortBy";
import SearchBar from "../../features/SearchBar/SearchBar";
import "./Header.css";

function Header() {
    return (
        <div className="headerContainer">
            <SortBy />
            <SearchBar />
            <h1 className="logo">Reddit</h1>
        </div>
        
    );
};

export default Header;