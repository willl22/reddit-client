import React from "react";
import "./SortBy.css";

function SortBy() {

    const categories = ["Best", "Hot", "New", "Top", "Rising"];

    return (
        <select className="sortDropdown">
            {categories.map((category) => {
                return (
                    <option className="sortCategory">{category}</option>
                ) 
            })}
        </select>
    );
};

export default SortBy;