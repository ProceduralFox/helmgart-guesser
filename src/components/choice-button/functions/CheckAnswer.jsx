import { firestore } from "../../../firebase/firebase.utils";
import { connect } from 'react-redux';
import getRandomInt from "./getRandom";
import { correctAnswer } from "../../../redux/quiz/quiz.actions";


export let NewQuestion = []
let length = 3

const GetData = async () => {
    
    for (let index = 0; index < length; index++) {
        let number = getRandomInt(1,11).toString();

        firestore.collection('questions').doc(number).get().then(
            snapshot => {
            NewQuestion.push(snapshot.data())
            console.log(NewQuestion)
            })
            .catch(
                err => console.log(err)
            );

        
    }
}

// let number = getRandomInt(2,7).toString();

// console.log(number);

export const EraseData = () =>{ 
    NewQuestion.length = 0
}


// GetData();

export default GetData;
