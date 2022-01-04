import { correctAnswer, correctAnswer2 } from "./quiz.utils"

// {
//     answer: "Screaming Bell",
//     image: "The Bell",
//     first: "Convocation of Decay",
//     second: "Screaming Bell",
//     third: "Festering Ground",
//     fourth: "Empire in Flames"
// }

const INITIAL_STATE = {
    currentQuestion: null,
    currentPosition: 0,
    maxPosition: 3,
    correctQuestion: 0,
    voted: false,
    correct: null,
    alreadyRolled: [],
    questionsList: [],
    currentRun: 1,
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

        case 'GET_DATA':
            return {
                ...state,
                questionsList: action.payload
            }

        case 'SET_CURRENT_RUN':
            return {
                ...state,
                currentRun: action.payload
            }

        case 'SET_ALREADY_ROLLED':
            return {
                ...state,
                alreadyRolled: action.payload
            }

        default:
            return state;

    }
}

export default quizReducer;