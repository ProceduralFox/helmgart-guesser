import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ChoiceButton from '../../components/choice-button/choice-button.component';
import CheckAnswer, { NewQuestion } from '../../components/choice-button/functions/CheckAnswer';
import { logState, setQuestion } from '../../redux/quiz/quiz.actions';



const QuizPage = ({ currentQuestion, setQuestion, logState }) => {

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
                    <ChoiceButton handleChange={() => setQuestion(NewQuestion)} value="change state"/>
                    <ChoiceButton handleChange={logState} value="log state"/>
                    </div>


                </div>

            </div>

        );
}

const mapStateToProps = state => ({
    currentQuestion: state.quiz.currentQuestion
})

const mapDispatchToProps = dispatch => ({
    setQuestion: NewQuestion => dispatch(setQuestion(NewQuestion)),
    logState: () => dispatch(logState())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
