import React from "react";
import SearchBox from "./SearchBox";
import WrittenItem from "./WrittenItem";
import style from "./list.module.css";
import { useSelector } from "react-redux";

export default function List() {
    const diaryList = useSelector((state) => state.diaryList);

    return (
        <div className={style.written}>
            <SearchBox />
            {diaryList.map((diary) => (
                <WrittenItem diary={diary} />
            ))}
        </div>
    );
}
