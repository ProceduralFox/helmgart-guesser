import React from 'react';
import {EraseData} from '../../components/choice-button/functions/CheckAnswer';
import QuizPage from '../quiz-page/quiz-page.component';



class QuizContainer extends React.Component {

    componentWillUnmount() {
        EraseData()
    }

    render() {
        return (
            <div>
                <QuizPage/>
            </div>
        )
    }
}

export default QuizContainer;