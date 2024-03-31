let initialState = {
    diaryList: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_DIARY":
            return {
                ...state,
                diaryList: [...state.diaryList, action.payload],
            };
        default:
            return state;
    }
}
