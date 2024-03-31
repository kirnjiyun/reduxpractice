import React from "react";
import SearchBox from "./SearchBox";
import WrittenItem from "./WrittenItem";
import style from "./list.module.css";

const items = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
];

export default function List() {
    return (
        <div className={style.written}>
            <SearchBox />
            <WrittenItem />
            <WrittenItem />
            <WrittenItem />
        </div>
    );
}
