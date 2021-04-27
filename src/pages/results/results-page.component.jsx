import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logState, redoState, setQuestion } from '../../redux/quiz/quiz.actions';

const test = "Seveng"

const ResultsPage = ({ correctQuestion }) => {

    if(correctQuestion<1){
        return (
            <div><div>Umgak</div>


            <Link className='option 'to='/quiz' onClick={() => redoState()}>
                        Redo
                        </Link>
            </div>

        
        )
    } else if (correctQuestion<2) {
        return (
            <div><div>Rat Catcher</div>


            <Link className='option 'to='/quiz' onClick={() => redoState()}>
                        Redo
                        </Link>
            </div>
        )
    } else if (correctQuestion < 3) {
        return (
            <div><div>Green Circles</div>


            <Link className='option 'to='/quiz' onClick={() => redoState()}>
                        Redo
                        </Link>
            </div>
        )
    } else {
        return (
            <div><div>Cousin Okri</div>


            <Link className='option 'to='/quiz' onClick={() => redoState()}>
                        Redo
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