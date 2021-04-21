import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logState, setQuestion } from '../../redux/quiz/quiz.actions';
import { NewQuestion } from '../choice-button/functions/CheckAnswer';


const Homepage = ({ setQuestion, currentPosition }) => {
    return (
        <div>
            <p>Are you ready to start?</p>
            <Link className='option 'to='/quiz' onClick={() => setQuestion(NewQuestion[currentPosition])}>
                Yes
            </Link>
        </div>
    )
}

const mapStateToProps = state => ({
    currentQuestion: state.quiz.currentQuestion,
    currentPosition: state.quiz.currentPosition
})

const mapDispatchToProps = dispatch => ({
    setQuestion: NewQuestion => dispatch(setQuestion(NewQuestion)),
    logState: () => dispatch(logState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);