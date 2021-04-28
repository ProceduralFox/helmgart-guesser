export const increasePosition = (currentPosition) => {
    return currentPosition + 1
}

export const correctAnswer = (answer, currentValue) => {
    if (answer[0] === answer[1]){
        return currentValue + 1
    } else {
        return currentValue
    }
}

export const correctAnswer2 = (answer) => {
    if (answer[0] === answer[1]){
        return true
    } else {
        return false
    }
}

