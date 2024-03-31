import React, { useState } from "react";
import style from "./newForm.module.css";
import { useDispatch } from "react-redux";

export default function NewForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const addDiary = (event) => {
        event.preventDefault();
        //리덕스 스토어에 보내기 그건 액션이 하는건데 디스패치가 액션을 하는거임
        dispatch({
            type: "ADD_DIARY",
            payload: {
                id: Date.now(),
                title,
                content, //키랑 밸류 똑같아서 하나만 쓰는거임
            }, //액션 던지면 리듀서로 가는거임
        });
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
