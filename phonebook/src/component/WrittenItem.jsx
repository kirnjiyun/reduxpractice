import React from "react";
import style from "./writtenitem.module.css";
import pencil from "../images/icon-pencil.png";
import trash from "../images/icon-trash.png";
export default function WrittenItem() {
    // const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleDateString();
    // };
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>제목이야</h2>
                <p className={style.date}>2024-5-21</p>
            </div>
            <p className={style.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                blanditiis deserunt eius vero, commodi eum, amet animi, cumque
                labore nostrum alias quasi magni dolor ipsum at voluptatem
                tempora repudiandae! Nemo?
            </p>
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
