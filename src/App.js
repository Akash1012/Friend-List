import React from 'react';
import PersonList from './Component/PersonList'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PersonList />
      </div>
    );
  }
}

export default App;
