import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Melissa Baldwin</h1>
        </header>

          <p className="summary">I am a front-end developer with a focus on building robust applications!</p>
          
      </div>

      function ListofSkills(skill){
          const skills = ['Jquery,React,APIs,Javascript,JSON,AJAX'];
          const listSkills = skills.map((skill) =>
            <li>{skill}</li>
          )};
    );
  }
}

export default App;
