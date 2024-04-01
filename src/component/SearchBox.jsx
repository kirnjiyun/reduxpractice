import React, { useState } from "react";
import style from "./searchBox.module.css";
import { useDispatch } from "react-redux";

export default function SearchBox() {
    const dispatch = useDispatch();

    const [keyword, setKeyword] = useState("");

    const keywordChange = (e) => {
        setKeyword(e.target.value);
        dispatch({ type: "FILTER_DIARIES", payload: e.target.value });
    };

    return (
        <div className={style.searchBox}>
            <input
                type="text"
                className={style.input}
                placeholder="여기서 검색하세요"
                value={keyword}
                onChange={keywordChange}
            />
        </div>
    );
}
