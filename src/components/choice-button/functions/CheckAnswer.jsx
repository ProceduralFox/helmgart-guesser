import { firestore } from "../../../firebase/firebase.utils";
import { connect } from 'react-redux';
import getRandomInt from "./getRandom";
import { correctAnswer } from "../../../redux/quiz/quiz.actions";


export let NewQuestion = []
let length = 3

const GetData = async () => {

    const questionsList = []
    
    const alreadyRolled = []
    for (let index = 0; index < length; index++) {
        let number = getRandomInt(1,11).toString();

        while(alreadyRolled.includes(number)){
            number = getRandomInt(1,11).toString();
        }

        await firestore.collection('questions').doc(number).get().then(
            snapshot => {
            questionsList.push(snapshot.data())
            })
            .catch(
                err => console.log(err)
            );

        alreadyRolled.push(number)
        
    }

    return questionsList

}

export const EraseData = () =>{ 
    NewQuestion.length = 0
}


export default GetData;
