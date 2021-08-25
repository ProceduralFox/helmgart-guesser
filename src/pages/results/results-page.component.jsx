import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logState, redoState, setQuestion } from '../../redux/quiz/quiz.actions';

import './results-page.styles.css'

const ResultsPage = ({ correctQuestion, redoState }) => {

    if(correctQuestion<1){
        return (
            <div className="page">
                <div className="shade"></div>
                <div className="title">{correctQuestion} / 10 </div>
                <div className="blurb"> Umgak</div>
                <p className="text"> " Disappointing ... "</p>


            <Link className='option btn link'to='/' onClick={() => redoState()}>
                        Try Again
            </Link>
            </div>

        
        )
    } else if (correctQuestion<2) {
        return (
            <div className="page">
                <div className="shade"></div>
                <div className="title">{correctQuestion} / 10 </div>
                <div className="blurb"> Rat Catcher</div>
                <p className="text"> " About what I expected, Lohner's the real hero, managing with you lot. "</p>


            <Link className='option btn link'to='/' onClick={() => redoState()}>
                        Try Again
                        </Link>
            </div>
        )
    } else if (correctQuestion < 3) {
        return (
            <div className="page">
                <div className="shade"></div>
                <div className="title">{correctQuestion} / 10 </div>
                <div className="blurb"> Green Circles</div>
                <p className="text">" Well done! Elves wanna be you, Krubers wanna be with you, now just work on that friendly fire and you'll be golden. " </p>


            <Link className='option btn link'to='/' onClick={() => redoState()}>
                        Try Again
                        </Link>
            </div>
        )
    } else {
        return (
            <div className="page">
                <div className="shade"></div>
                <div className="title">{correctQuestion} / 10 </div>
                <div className="blurb"> Cousin Okri</div>

                <p className="text"> " Now THAT is how we do it, Dawri! "</p>


            <Link className='option btn link' to='/' onClick={() => redoState()}>
                        Start Again
                        </Link>
            </div>
        )
    }

    


}

const mapStateToProps= state => ({
    correctQuestion: state.quiz.correctQuestion
})

const mapDispatchToProps = dispatch => ({
    setQuestion: NewQuestion => dispatch(setQuestion(NewQuestion)),
    logState: () => dispatch(logState()),
    redoState: () => dispatch(redoState())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);