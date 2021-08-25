

export const setQuestion = NewQuestion => {
    return(
    {
    type: 'SET_CURRENT_QUESTION',
    payload: NewQuestion,
    })}


export const logState = () => ({
    type: 'LOG_STATE',
    payload: null,
})

export const redoState = () => ({
    type: 'REDO_STATE',
    payload: null
})

export const getQuestions = (list) => ({
    type: 'GET_DATA',
    payload: list
})

export const setRun = (position) => ({
    type: 'SET_CURRENT_RUN',
    payload: position
})

export const setRolled = (list) => ({
    type: 'SET_ALREADY_ROLLED',
    payload: list
})

export const correctAnswer = (answer) => ({
    type: 'CORRECT_ANSWER',
    payload: answer
})