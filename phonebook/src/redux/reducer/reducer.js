let initialState = {
    diaryList: [],
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADD_DIARY":
            return {
                ...state,
                diaryList: [
                    ...state.diaryList,
                    { title: payload.title, content: payload.content },
                ],
            };
        default:
            return state;
    }
}
