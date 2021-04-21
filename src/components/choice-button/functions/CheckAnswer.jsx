import { firestore } from "../../../firebase/firebase.utils";
import getRandomInt from "./getRandom";


export let NewQuestion = []
let length = 3

const GetData = async () => {
    
    for (let index = 0; index < length; index++) {
        let number = getRandomInt(1,6).toString();

        firestore.collection('questions').doc(number).get().then(
            snapshot => {
            NewQuestion.push(snapshot.data())
            console.log(NewQuestion)
            })
            .catch(
                err => console.log(err)
            );

        
    }



    // firestore.collection('questions').doc('1').get().then(
    //     snapshot => {
    //     console.log(NewQuestion)
    //     NewQuestion=snapshot.data()
    //     console.log(NewQuestion)
    //     })
    //     .catch(
    //         err => console.log(err)
    //     );
    
}

// let number = getRandomInt(2,7).toString();

// console.log(number);


GetData();


const CheckAnswer = async (choice, answer) => {

    if(choice === answer){
        console.log("Correct")
    } else {
        console.log("Wrong")
    }
}

export default CheckAnswer;
