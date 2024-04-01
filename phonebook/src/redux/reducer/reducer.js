let initialState = {
    diaryList: [],
    keyword: "",
    filteredDiaries: [],
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_DIARY":
            const newDiaryList = [
                ...state.diaryList,
                { title: payload.title, content: payload.content },
            ];
            return {
                ...state,
                diaryList: newDiaryList,
                filteredDiaries: newDiaryList.filter(
                    (diary) =>
                        diary.title.includes(state.keyword) ||
                        diary.content.includes(state.keyword)
                ),
            };
        case "SET_KEYWORD":
            return {
                ...state,
                keyword: payload,
                filteredDiaries: state.diaryList.filter(
                    (diary) =>
                        diary.title.includes(payload) ||
                        diary.content.includes(payload)
                ),
            };
        case "FILTER_DIARIES":
            return {
                ...state,
                filteredDiaries: state.diaryList.filter(
                    (diary) =>
                        diary.title.includes(state.keyword) ||
                        diary.content.includes(state.keyword)
                ),
            };
        default:
            return state;
    }
}
