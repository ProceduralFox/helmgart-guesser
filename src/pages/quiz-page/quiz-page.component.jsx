import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import ChoiceButton from '../../components/choice-button/choice-button.component';
import CheckAnswer, { NewQuestion } from '../../components/choice-button/functions/CheckAnswer';
import { correctAnswer, logState, redoState, setQuestion } from '../../redux/quiz/quiz.actions';

import './quiz-page.styles.css';


const QuizPage = ({ currentPosition, correct, correctAnswer, voted,  maxPosition, currentQuestion, setQuestion, logState, redoState, questionsList }) => {
    const history = useHistory()
    const [screen, setScreen] = useState(window.innerWidth)

    useEffect(()=>{
        function handle_resize(){
            setScreen(window.innerWidth)
            
        }

        window.addEventListener('resize', handle_resize)

        return () => {
            window.removeEventListener('resize', handle_resize)
        }
    }, [])

    if(!currentQuestion){
        history.push("/")
        return null
    }

    const { answer, first, fourth, image, second, third } = currentQuestion

    if(true){
        return (
            <main className="page__new">
                <section className="container">
                    <div className="shade__new">
                        <div className='image__new' >
                            <img className='clue__new' src={currentQuestion.image} alt=""/>
                        </div>
                    </div>
                    {
                    voted ?
                    <div className="options__new">
                        {
                            correct ?
                            <div className="answer__new correct">Correct, {`the answer is ${answer}`}</div>
                            :
                            <div className="answer__new incorrect">Incorrect, {`the answer is ${answer}`}</div>
                        }
                    </div>
                    :
                    <div className="options__new">
                        <ChoiceButton handleChange={() => correctAnswer([first, answer])} value={first}/>
                        <ChoiceButton handleChange={() => correctAnswer([second, answer])} value={second}/>
                        <ChoiceButton handleChange={() => correctAnswer([third, answer])} value={third}/>
                        <ChoiceButton handleChange={() => correctAnswer([fourth, answer])} value={fourth}/>
                    </div>
                    }
                    {
                    voted ? 
                    <div className="utility__new">
                        {
                            currentPosition < maxPosition ?
                            <ChoiceButton handleChange={() => setQuestion(questionsList[currentPosition])} value="Next Question"/>
                            :
                            <Link className='begin'to='/results'>
                            Results
                            </Link>
                        }
                    </div>
                    :
                    null
                    }

                </section>
            </main>
        )
    }
        if(screen < 800)
        {
        return (

            <div className='page'>

                <div className="shade">
                    <div className='image' >
                        <img className='clue' 
                        src={currentQuestion.image} alt=""/>
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

            </div>

        );
    }
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
    )
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
