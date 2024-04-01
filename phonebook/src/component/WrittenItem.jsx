import React from "react";
import style from "./writtenitem.module.css";
import pencil from "../images/icon-pencil.png";
import trash from "../images/icon-trash.png";
import { useDispatch, useSelector } from "react-redux";

export default function WrittenItem({ diary }) {
    const dispatch = useDispatch();
    const keyword = useSelector((state) => state.keyword);
    // "삭제" 버튼에 대한 클릭 이벤트 핸들러
    const handleDelete = () => {
        dispatch({ type: "DELETE_DIARY", payload: diary.id });
    };

    return (
        <div className={style.container}>
            <h2 className={style.title}>{diary.title}</h2>
            <p className={style.content}>{diary.content}</p>
            <div className={style.buttons}>
                <button
                    className={style.updateButton}
                    onClick={() => alert("수정 기능 구현 예정")}
                >
                    <img src={pencil} alt="수정 아이콘" />
                </button>
                <button className={style.deleteButton} onClick={handleDelete}>
                    <img src={trash} alt="삭제 아이콘" />
                </button>
            </div>
        </div>
    );
}
