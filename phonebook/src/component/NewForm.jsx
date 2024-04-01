import React, { useState } from "react";
import style from "./newForm.module.css";
import { useDispatch } from "react-redux";

export default function NewForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const addDiary = (event) => {
        event.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }

        dispatch({
            type: "ADD_DIARY",
            payload: {
                id: Date.now(),
                title,
                content,
            },
        });

        setTitle("");
        setContent("");
    };

    return (
        <form className={style.form} onSubmit={addDiary}>
            <div className={style.title}>
                <label>제목</label>
                <input
                    className={style.input}
                    type="text"
                    placeholder="제목을 써주세요"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </div>
            <div className={style.content}>
                <label>내용</label>
                <textarea
                    className={style.textarea}
                    rows="5"
                    cols="30"
                    placeholder="오늘 운동한 내용과 느낌을 작성해주세요"
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
            </div>

            <button className={style.btn} type="submit">
                <span>일기쓰기</span>
            </button>
        </form>
    );
}
