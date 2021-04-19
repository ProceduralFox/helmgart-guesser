import { firestore } from "../../../firebase/firebase.utils";

let NewQuestion = null

const GetData = async () => {
    firestore.collection('questions').doc('1').get().then(
        snapshot => {
        console.log(NewQuestion)
        NewQuestion=snapshot.data()
        console.log(NewQuestion)
        })
        .catch(
            err => console.log(err)
        );
    
}

// const test = firestore.collection('questions').doc('1').get().then(
//     snapshot => questin = snapshot.data());


const CheckAnswer = async (choice, answer) => {
    GetData()

    if(choice === answer){
        console.log("Correct")
    } else {
        console.log("Wrong")
    }
}

export default CheckAnswer;