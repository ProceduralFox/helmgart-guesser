import React from 'react';
import { connect } from 'react-redux';

import ChoiceButton from '../../components/choice-button/choice-button.component';
import CheckAnswer from '../../components/choice-button/functions/CheckAnswer';


const QuizPage = ({ currentQuestion }) => {

    const { answer, first, fourth, image, second, third } = currentQuestion
    console.log(currentQuestion)

        return (

            <div>
                <span>Picture goes here</span>

                <div className="Options">
                    <ChoiceButton handleChange={() => CheckAnswer(first, answer)} value={first}/>
                    <ChoiceButton handleChange={() => CheckAnswer(second, answer)} value={second}/>
                    <ChoiceButton handleChange={() => CheckAnswer(third, answer)} value={third}/>
                    <ChoiceButton handleChange={() => CheckAnswer(fourth, answer)} value={fourth}/>
                </div>

            </div>

        );
}

const mapStateToProps = state => ({
    currentQuestion: state.quiz.currentQuestion
})


export default connect(mapStateToProps)(QuizPage);
