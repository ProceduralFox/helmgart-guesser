import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ChoiceButton from '../../components/choice-button/choice-button.component';
import CheckAnswer, { NewQuestion } from '../../components/choice-button/functions/CheckAnswer';
import { logState, redoState, setQuestion } from '../../redux/quiz/quiz.actions';



const QuizPage = ({ currentPosition, maxPosition, currentQuestion, setQuestion, logState, redoState }) => {

    const { answer, first, fourth, image, second, third } = currentQuestion
    console.log(NewQuestion)

        return (

            <div>
                <span>Picture goes here</span>

                <div className="Options">
                    <ChoiceButton handleChange={() => CheckAnswer(first, answer)} value={first}/>
                    <ChoiceButton handleChange={() => CheckAnswer(second, answer)} value={second}/>
                    <ChoiceButton handleChange={() => CheckAnswer(third, answer)} value={third}/>
                    <ChoiceButton handleChange={() => CheckAnswer(fourth, answer)} value={fourth}/>

                    <Link className='option 'to='/'>
                        Take me back
                    </Link>

                    <div>
                    {
                        currentPosition < maxPosition ?
                        <ChoiceButton handleChange={() => setQuestion(NewQuestion[currentPosition])} value="change state"/>
                        :
                        <Link className='option 'to='/' onClick={() => redoState()}>
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
    maxPosition: state.quiz.maxPosition
})

const mapDispatchToProps = dispatch => ({
    setQuestion: NewQuestion => dispatch(setQuestion(NewQuestion)),
    logState: () => dispatch(logState()),
    redoState: () => dispatch(redoState())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
