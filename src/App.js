import React from 'react';
import './App.css';
import Homepage from './components/homepage/homepage.component';
import QuizPage from './pages/quiz-page/quiz-page.component';


import { Switch, Route, Redirect } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
  }


  render() {
    return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/quiz' component={QuizPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
