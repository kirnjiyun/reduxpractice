import React from "react";
import SearchBox from "./SearchBox";
import WrittenItem from "./WrittenItem";
import style from "./list.module.css";
import { useSelector } from "react-redux";

export default function List() {
    const diaryList = useSelector((state) => state.diaryList);
    const keyword = useSelector((state) => state.keyword);

    const filteredDiaries = useSelector((state) => state.filteredDiaries);

    return (
        <div className={style.written}>
            <SearchBox />
            {filteredDiaries.map((diary) => (
                <WrittenItem key={diary.id} diary={diary} />
            ))}
        </div>
    );
}
