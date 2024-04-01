import React from "react";
import style from "./writtenitem.module.css";
import pencil from "../images/icon-pencil.png";
import trash from "../images/icon-trash.png";
import { useDispatch, useSelector } from "react-redux";

export default function WrittenItem({ diary }) {
    const dispatch = useDispatch();
    const keyword = useSelector((state) => state.keyword);

    return (
        <div className={style.container}>
            <h2 className={style.title}>{diary.title}</h2>
            <p className={style.content}>{diary.content}</p>
            <div className={style.buttons}>
                <button className={style.updateButton}>
                    <img src={pencil} alt="수정 아이콘" />
                </button>
                <button className={style.deleteButton}>
                    <img src={trash} alt="삭제 아이콘" />
                </button>
            </div>
        </div>
    );
}
