
const INITIAL_STATE = {
    currentQuestion: {
        answer: "Screaming Bell",
        image: "The Bell",
        first: "Convocation of Decay",
        second: "Screaming Bell",
        third: "Festering Ground",
        fourth: "Empire in Flames"
    }
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_QUESTION':
            return {
                ...state,
                currentQuestion: action.payload
            }

        default:
            return state;

    }
}

export default quizReducer;