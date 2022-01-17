import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logState, redoState, setQuestion } from '../../redux/quiz/quiz.actions';

import './results-page.styles.css'


const ResultsPage = ({ correctQuestion, redoState }) => {

    const [results, setResults] = useState({
        0:["Umgak",`" Disappointing ... "`],
        1:["Rat Catcher", ` " About what I expected, Lohner's the real hero, managing with you lot. " `],
        2:["Green Circles", ` "Well done! Elves wanna be you, and Krubers wanna be with you. " `],
        3:["Cousin Okri", ` " Now THAT is how we do it, Dawri! " `]
    })

    return (
    <main className="page__new">
        <section className="container">
            <div className="shade__new">
                <h2 className="shade__top">{results[Math.floor(correctQuestion/3)][0]}</h2>
                <p className="shade__middle">
                    {results[Math.floor(correctQuestion/3)][1]}
                </p>
                <h3 className="shade__bottom">{`${correctQuestion} / 10`}</h3>
            </div>
            <div className="buttons_new">
                <Link className='begin' to='/' onClick={() => redoState()}>
                    Try Again
                </Link>
            </div>
        </section>
    </main>
    )
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