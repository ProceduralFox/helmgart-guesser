import React from 'react';
import './App.css';
import QuizPage from './pages/quiz-page/quiz-page.component';


class App extends React.Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
  }


  render() {
    return (
    <div>
      <QuizPage/>
    </div>
  );
  }
}

export default App;
