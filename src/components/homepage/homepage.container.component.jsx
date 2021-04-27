import React from 'react';
import GetData from '../choice-button/functions/CheckAnswer';

import Homepage from './homepage.component';



class HomeContainer extends React.Component {


    componentWillMount(){
        GetData()
        console.log("happens now")
    }

    componentDidMount() {
        console.log("happens later")
    }

    render() {
        return (
            <div>
                <Homepage/>
            </div>
        )
    }
}

export default HomeContainer;