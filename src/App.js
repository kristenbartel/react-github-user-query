import React from 'react';
import './App.css';
import Issue from './components/Issue';
import IssuesList from './components/IssuesList'; //do not destructor is there are no smaller pieces beneath

function App() { 
  return (
    <div> 
    <IssuesList/>
    </div>

  )
}

export default App;
