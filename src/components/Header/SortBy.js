import React from "react";
import "./SortBy.css";

function SortBy() {
    return (
        <div className="sortContainer">
            <select className="sortDropdown">
                <option>Best</option>
                <option>Hot</option>
                <option>New</option>
                <option>Top</option>
                <option>Rising</option>
            </select>
        </div>
    );
};

export default SortBy;