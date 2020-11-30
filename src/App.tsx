import React from 'react';
import QuestionDisplay from './components/QuestionDisplay';
import ResultPage from './components/ResultPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div>
            <QuestionDisplay />
          </div>
        </Route>
        <Route exact path='/result'>
            <ResultPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
