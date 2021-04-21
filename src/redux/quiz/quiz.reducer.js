
const INITIAL_STATE = {
    currentQuestion: {
        answer: "Screaming Bell",
        image: "The Bell",
        first: "Convocation of Decay",
        second: "Screaming Bell",
        third: "Festering Ground",
        fourth: "Empire in Flames"
    },
    currentPosition: 0,
    maxPosition: 3
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_QUESTION':
            return {
                ...state,
                currentQuestion: action.payload,
                currentPosition: state.currentPosition + 1
            }

        case 'REDO_STATE':
            return {
                ...state,
                currentPosition: 0
            }

        case 'LOG_STATE':
            console.log(state.currentQuestion)
            return state;

        default:
            return state;

    }
}

export default quizReducer;