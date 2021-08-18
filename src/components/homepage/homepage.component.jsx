import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logState, setQuestion } from '../../redux/quiz/quiz.actions';
import { NewQuestion } from '../choice-button/functions/CheckAnswer';

import './homepage.styles.css';


const Homepage = ({ setQuestion, currentPosition }) => {
    return (
        <div className="page">
            <div className="shade"></div>
            <div className="blurb">Helmgart Guesser</div>
            <p className="text">
                " Lohner tells me you've been running errands for him all over Helmgart like a frantic Halfling looking for spices in a Stirlander's kitchen. <br></br>
                <br></br>
                Now what with our guests defiling every last inch of the town this probably means you can tell the difference between a Stormvermin and a Clan-Rat, but how much attention how you been paying to the lay of the land? <br></br>
                <br></br>
                I'll show you a couple landmarks and you tell me which part of this lovely little town each one is from. If you do well enough I might even have a chat with Lohner about not sending you to that Shallyian hospice anymore. "



                

            </p>
            <p className="Intro">Are you ready to start?</p>
            <Link className='btn link'to='/quiz' onClick={() => setQuestion(NewQuestion[currentPosition])}>
                Begin
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