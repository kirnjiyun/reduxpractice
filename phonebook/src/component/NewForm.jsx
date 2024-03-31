import React from "react";

export default function NewForm() {
    const Submit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={Submit}>
                <div>
                    <label>제목</label>
                    <input type="text" placeholder="제목을 입력해주세요" />
                </div>
                <div>
                    <label>내용</label>
                    <input type="text" />
                </div>

                <button type="submit">일기쓰기</button>
            </form>
        </div>
    );
}
