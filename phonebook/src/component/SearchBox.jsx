import React from "react";
import style from "./searchBox.module.css";
export default function SearchBox() {
    return (
        <div className={style.searchBox}>
            <input
                type="text"
                className={style.input}
                placeholder="여기서 검색하세요"
            />
            <button className={style.button}>찾기</button>
        </div>
    );
}
