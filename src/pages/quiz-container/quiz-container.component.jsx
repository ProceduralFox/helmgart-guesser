import React from 'react';
import GetData, {EraseData} from '../../components/choice-button/functions/CheckAnswer';
import QuizPage from '../quiz-page/quiz-page.component';



class QuizContainer extends React.Component {


    

    componentDidMount() {
        console.log("happens later")
    }

    componentWillUnmount() {
        EraseData()
        GetData()
        console.log("iz this running")
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