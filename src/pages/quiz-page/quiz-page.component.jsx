import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import ChoiceButton from '../../components/choice-button/choice-button.component';
import CheckAnswer, { NewQuestion } from '../../components/choice-button/functions/CheckAnswer';
import { correctAnswer, logState, redoState, setQuestion } from '../../redux/quiz/quiz.actions';

import './quiz-page.styles.css';



const QuizPage = ({ currentPosition, correct, correctAnswer, voted,  maxPosition, currentQuestion, setQuestion, logState, redoState, questionsList }) => {
    const history = useHistory()

    if(!currentQuestion){
        history.push("/")
        console.log("redirected to homepage")
        return null
    }

    const { answer, first, fourth, image, second, third } = currentQuestion



        return (

            <div className='page'>

                <div className="shade">
                    <div className='image' >
                        <img className='clue' 
                        src={currentQuestion.image} alt=""/>
                    </div>
                </div>


                {
                voted ?
                <div className="Options">
                    {
                        correct ?
                        <div className="answer correct btn link ">Correct, {`the answer is ${answer}`}</div>
                        :
                        <div className="answer incorrect btn link">Incorrect, {`the answer is ${answer}`}</div>
                    }
                </div>
                :
                <div className='fixedxContainer' className="Options">
                    <ChoiceButton handleChange={() => correctAnswer([first, answer])} value={first}/>
                    <ChoiceButton handleChange={() => correctAnswer([second, answer])} value={second}/>
                    <ChoiceButton handleChange={() => correctAnswer([third, answer])} value={third}/>
                    <ChoiceButton handleChange={() => correctAnswer([fourth, answer])} value={fourth}/>
                </div>
                }



                {
                voted ? 
                <div className="utility">
                    {
                        currentPosition < maxPosition ?
                        <ChoiceButton handleChange={() => setQuestion(questionsList[currentPosition])} value="Next Question"/>
                        :
                        <Link className='option btn link'to='/results'>
                        Results
                        </Link>
                    }
                    </div>
                    :
                <div></div>    
                }

            </div>

        );
}

const mapStateToProps = state => ({
    currentQuestion: state.quiz.currentQuestion,
    currentPosition: state.quiz.currentPosition,
    maxPosition: state.quiz.maxPosition,
    voted: state.quiz.voted,
    correct: state.quiz.correct,
    questionsList: state.quiz.questionsList
})

const mapDispatchToProps = dispatch => ({
    setQuestion: NewQuestion => dispatch(setQuestion(NewQuestion)),
    logState: () => dispatch(logState()),
    redoState: () => dispatch(redoState()),
    correctAnswer: (answer) => dispatch(correctAnswer(answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
