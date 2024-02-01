import React from "react";
import "./SortBy.css";

export const categories = ["Best", "Hot", "New", "Top", "Rising"];

function SortBy() {

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