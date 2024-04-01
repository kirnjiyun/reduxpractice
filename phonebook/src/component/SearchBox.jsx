import React from "react";
import style from "./searchBox.module.css";
import { useDispatch } from "react-redux";

export default function SearchBox() {
    const dispatch = useDispatch();

    const keywordChange = (e) => {
        dispatch({ type: "SET_KEYWORD", payload: e.target.value });
    };

    const handleSearch = () => {
        dispatch({ type: "FILTER_DIARIES" });
    };

    return (
        <div className={style.searchBox}>
            <input
                type="text"
                className={style.input}
                placeholder="여기서 검색하세요"
                onChange={keywordChange}
            />
            <button className={style.button} onClick={handleSearch}>
                찾기
            </button>
        </div>
    );
}
