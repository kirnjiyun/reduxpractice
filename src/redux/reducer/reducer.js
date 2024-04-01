let initialState = {
    diaryList: [],
    keyword: "",
    filteredDiaries: [],
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_DIARY":
            const newDiary = {
                id: Date.now(),
                title: payload.title,
                content: payload.content,
            };
            const newDiaryList = [...state.diaryList, newDiary];
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
            const keyword = payload;
            const filtered = state.diaryList.filter(
                (diary) =>
                    diary.title.includes(keyword) ||
                    diary.content.includes(keyword)
            );
            return {
                ...state,
                keyword,
                filteredDiaries: filtered,
            };
        case "DELETE_DIARY":
            const updatedDiaries = state.diaryList.filter(
                (diary) => diary.id !== action.payload
            );
            return {
                ...state,
                diaryList: updatedDiaries,
                filteredDiaries: updatedDiaries.filter(
                    (diary) =>
                        diary.title.includes(state.keyword) ||
                        diary.content.includes(state.keyword)
                ),
            };
        default:
            return state;
    }
}
