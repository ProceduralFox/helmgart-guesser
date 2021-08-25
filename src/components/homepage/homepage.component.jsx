import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestions, logState, setQuestion, setRolled, setRun } from '../../redux/quiz/quiz.actions';

import './homepage.styles.css';
import { useEffect } from 'react';
import getRandomInt from '../choice-button/functions/getRandom';
import { firestore } from '../../firebase/firebase.utils';


const Homepage = ({ setQuestion, currentPosition, getQuestions, questionsList, currentRun, setRun, setRolled, alreadyRolled }) => {

    const GetData = async () => {
        const length = 3
        const questionsList = []
        
        const previouslyRolled = alreadyRolled

        for (let index = 0; index < length; index++) {
            let number = getRandomInt(1,11).toString();
    
            while(previouslyRolled.includes(number)){
                number = getRandomInt(1,11).toString();
            }
    
            await firestore.collection('questions').doc(number).get().then(
                snapshot => {
                questionsList.push(snapshot.data())
                console.log(questionsList)
                })
                .catch(
                    err => console.log(err)
                );
    
            previouslyRolled.push(number)
            
        }

        if(currentRun > 2){
            setRun(1)
            setRolled([])
        } else {
            setRun(currentRun+1)
            setRolled(previouslyRolled)
        }

        console.log(previouslyRolled)
    
        return questionsList
    
    }
    
    useEffect(async ()=>{

        const questions = await GetData()
        getQuestions(questions)
    }, [])



    return (
        <div className="page">
            <div className="shade"></div>
            <div className="blurb">HELMGART GUESSER</div>
            <p className="text">
                " Lohner tells me you've been running errands for him all over Helmgart like a frantic Halfling looking for spices in a Stirlander's kitchen. <br></br>
                <br></br>
                Now what with our guests defiling every last inch of the town this probably means you can tell the difference between a Stormvermin and a Clan-Rat, but how much attention have you been paying to the lay of the land? <br></br>
                <br></br>
                I'll show you a couple landmarks and you tell me which part of this lovely little town each one is from. If you do well enough I might even have a chat with Lohner about not sending you to that Shallyian hospice anymore. "
            </p>
            <p className="Intro">Are you ready to start?</p>
            <Link className='btn link'to='/quiz' onClick={() => setQuestion(questionsList[currentPosition])}>
                Begin
            </Link>
        </div>
    )
}


const mapStateToProps = state => ({
    currentQuestion: state.quiz.currentQuestion,
    currentPosition: state.quiz.currentPosition,
    questionsList: state.quiz.questionsList,
    alreadyRolled: state.quiz.alreadyRolled,
    currentRun: state.quiz.currentRun,
})

const mapDispatchToProps = dispatch => ({
    setQuestion: NewQuestion => dispatch(setQuestion(NewQuestion)),
    logState: () => dispatch(logState()),
    getQuestions: list => dispatch(getQuestions(list)),
    setRun: position => dispatch(setRun(position)),
    setRolled: list => dispatch(setRolled(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);