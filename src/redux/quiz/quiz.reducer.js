import { correctAnswer, correctAnswer2 } from "./quiz.utils"


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
    maxPosition: 3,
    correctQuestion: 0,
    voted: false,
    correct: null
}

const quizReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_QUESTION':
            return {
                ...state,
                voted: false,
                currentQuestion: action.payload,
                currentPosition: state.currentPosition + 1
            }

        case 'REDO_STATE':
            return {
                ...state,
                currentPosition: 0,
                correctQuestion: 0,
                voted: false
            }

        case 'CORRECT_ANSWER':
            return {
                ...state,
                voted: true,
                correctQuestion: correctAnswer(action.payload, state.correctQuestion),
                correct: correctAnswer2(action.payload)
            }

        case 'LOG_STATE':
            console.log(state.currentQuestion)
            return state;

        default:
            return state;

    }
}

export default quizReducer;