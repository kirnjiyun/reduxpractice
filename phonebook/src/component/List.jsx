import React from "react";
import SearchBox from "./SearchBox";
import WrittenItem from "./WrittenItem";
export default function List() {
    return (
        <div>
            <SearchBox />
            <WrittenItem />
            <WrittenItem />
            <WrittenItem />
        </div>
    );
}
