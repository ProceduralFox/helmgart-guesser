

export const setQuestion = NewQuestion => {
    console.log("test")
    return(
    {
    type: 'SET_CURRENT_QUESTION',
    payload: NewQuestion,
    })}


export const logState = () => ({
    type: 'LOG_STATE',
    payload: null,
})