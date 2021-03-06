import React from 'react';
import './App.css';
import Homepage from './components/homepage/homepage.component';
import QuizPage from './pages/quiz-page/quiz-page.component';


import { Switch, Route, Redirect } from 'react-router-dom';


import ResultsPage from './pages/results/results-page.component';
import ResultsContainer from './pages/results/results.container.component';



class App extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
  }


  render() {
    return (
    <main class="App">
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/quiz' component={QuizPage} />
      <Route path='/results' component={ResultsPage} />
      </Switch>
    </main>
  );
  }
}

export default App;
