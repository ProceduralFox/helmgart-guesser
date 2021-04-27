import React from 'react'
import GetData, { EraseData } from '../../components/choice-button/functions/CheckAnswer'
import ResultsPage from './results-page.component'



class ResultsContainer extends React.Component {

    componentWillMount() {
        
        EraseData()
        GetData()
    }

    render() {
        return(
            <div>
                <ResultsPage/>
            </div>
        )
    }
}


export default ResultsContainer;