import React from "react";
import style from "./newForm.module.css";
export default function NewForm() {
    return (
        <form className={style.form}>
            <div className={style.title}>
                <label>제목</label>
                <input
                    className={style.input}
                    type="text"
                    placeholder="제목을 써주세요"
                />
            </div>
            <div className={style.content}>
                <label>내용</label>
                <textarea
                    className={style.textarea}
                    rows="5"
                    cols="30"
                    placeholder="오늘 운동한 내용과 느낌을 작성해주세요"
                />
            </div>

            <button className={style.btn}>
                <span>일기쓰기</span>
            </button>
        </form>
    );
}
