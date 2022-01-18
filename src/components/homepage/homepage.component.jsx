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
        const length = 10
        const questionsListTemp = []

        let iteration = localStorage.getItem("iteration");
        let previouslyRolled = localStorage.getItem("previouslyRolled")

        if(!iteration){
            iteration = 1
        } else {
            iteration = JSON.parse(iteration) + 1
        }

        if(!previouslyRolled){
            previouslyRolled = {}
        } else {
            previouslyRolled = JSON.parse(previouslyRolled)
        }


        for (let index = 0; index < length; index++) {

            let valid = false
            let number = 0

            while(!valid){
                const temp = getRandomInt(1, 60).toString();
                
                if(!previouslyRolled[temp]){
                    previouslyRolled[temp] = iteration;
                    number = temp;
                    valid = true;
                } else {
                    const difference = iteration - previouslyRolled[temp]

                    if(difference > 2){
                        previouslyRolled[temp] = iteration;
                        number = temp;
                        valid = true;
                    }
                }
            }


    
            await firestore.collection('questions').doc(number).get().then(
                snapshot => {
                questionsListTemp.push(snapshot.data())
                })
                .catch(
                    err => console.log(err)
                );
            
        }

        iteration = JSON.stringify(iteration)
        previouslyRolled = JSON.stringify(previouslyRolled)

        localStorage.setItem("iteration", iteration)
        localStorage.setItem("previouslyRolled", previouslyRolled)

    
        return questionsListTemp
    
    }
    
    useEffect(async ()=>{

        try {
            const questions = await GetData()
            getQuestions(questions)
        } catch (error) {
            console.log(error)
            window.alert("I ran out of free bandwidth for the day so the app will no longer work properly for today. Sorry about that!")
        }

    }, [])


    if(true){
        return (
            <main className="page__new">
                <section className="container">
                    <div className="shade__new">
                        <h2 className="shade__top">Helmgart Guesser</h2>
                        <p className="shade__middle">
                            " Lohner tells me you've been running errands for him all over Helmgart like a frantic Halfling looking for spices in a Stirlander's kitchen. <br></br>
                                <br></br>
                            Now what with our guests defiling every last inch of the town this probably means you can tell the difference between a Stormvermin and a Clan-Rat, but how much attention have you been paying to the lay of the land? <br></br>
                                <br></br>
                            I'll show you a couple landmarks and you tell me which part of this lovely little town each one is from. If you do well enough I might even have a chat with Lohner about not sending you to that Shallyian hospice anymore. "
                        </p>
                        <h3 className="shade__bottom">Are you ready to start?</h3>
                    </div>
                    <div className="buttons_new">
                        <Link className='begin' to='/quiz' onClick={() => setQuestion(questionsList[currentPosition])}>
                            Begin
                        </Link>
                    </div>
                </section>
            </main>
        )
    }



    return (
        <div className="pageText">
            <div className="shadeText">
                <div className="blurb">HELMGART GUESSER</div>
                <p className="text">
                    " Lohner tells me you've been running errands for him all over Helmgart like a frantic Halfling looking for spices in a Stirlander's kitchen. <br></br>
                    <br></br>
                    Now what with our guests defiling every last inch of the town this probably means you can tell the difference between a Stormvermin and a Clan-Rat, but how much attention have you been paying to the lay of the land? <br></br>
                    <br></br>
                    I'll show you a couple landmarks and you tell me which part of this lovely little town each one is from. If you do well enough I might even have a chat with Lohner about not sending you to that Shallyian hospice anymore. "
                </p>
                <p className="Intro">Are you ready to start?</p>
            </div>
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