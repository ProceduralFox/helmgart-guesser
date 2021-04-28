import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ChoiceButton from '../../components/choice-button/choice-button.component';
import CheckAnswer, { NewQuestion } from '../../components/choice-button/functions/CheckAnswer';
import { correctAnswer, logState, redoState, setQuestion } from '../../redux/quiz/quiz.actions';

import './quiz-page.styles.css';

const QuizPage = ({ currentPosition, correct, correctAnswer, voted,  maxPosition, currentQuestion, setQuestion, logState, redoState }) => {

    const { answer, first, fourth, image, second, third } = currentQuestion
    console.log(NewQuestion)

        return (

            <div>
                <span className={`${currentPosition > 1 ? 'green' : ''}`} >Picture goes here
                    <img src={currentQuestion.image} alt=""/>
                </span>

                {
                voted ?
                <div>
                    {
                        correct ?
                        <div>Correct {`the answer is ${answer}`}</div>
                        :
                        <div>Incorrect {`the answer is ${answer}`}</div>
                    }
                </div>
                :
                <div className={voted ? 'disable' : ''} className="Options">
                    <ChoiceButton handleChange={() => correctAnswer([first, answer])} value={first}/>
                    <ChoiceButton handleChange={() => correctAnswer([second, answer])} value={second}/>
                    <ChoiceButton handleChange={() => correctAnswer([third, answer])} value={third}/>
                    <ChoiceButton handleChange={() => correctAnswer([fourth, answer])} value={fourth}/>

                    <Link className='option 'to='/'>
                        Take me back
                    </Link>

                </div>
                }

                <div>
                <div>
                    {
                        currentPosition < maxPosition ?
                        <ChoiceButton handleChange={() => setQuestion(NewQuestion[currentPosition])} value="change state"/>
                        :
                        <Link className='option 'to='/results' onClick={() => redoState()}>
                        Redo
                        </Link>
                    }
                    
                    <ChoiceButton handleChange={logState} value="log state"/>
                    </div>
                </div>

            </div>

        );
}

const mapStateToProps = state => ({
    currentQuestion: state.quiz.currentQuestion,
    currentPosition: state.quiz.currentPosition,
    maxPosition: state.quiz.maxPosition,
    voted: state.quiz.voted,
    correct: state.quiz.correct
})

const mapDispatchToProps = dispatch => ({
    setQuestion: NewQuestion => dispatch(setQuestion(NewQuestion)),
    logState: () => dispatch(logState()),
    redoState: () => dispatch(redoState()),
    correctAnswer: (answer) => dispatch(correctAnswer(answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
