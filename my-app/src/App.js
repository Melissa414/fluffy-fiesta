import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import Typed from 'typed.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><code>Hello World!</code></h1>
        </header>
  
          <h5 className="summary">I am a front-end developer with a focus on building robust applications.</h5>
          <p className= "workEthic">I feel having a strong work ethic is part of an individual's personal values. It's based in a belief in the value of work for its own sake and not just for its rewards. 
          Being honest, having a positive attitude, taking initiative, caring about coworkers, doing more than expected, being reliable and responsible, learning new skills and being a team player are traits I strive to achieve.</p>
          <p className= "teamWork">The skills I have acquired from successful group work has helped me for future careers. Working effectively, planning for the different stages of group activity. Time spent discussing how your group will work together will be invaluable in helping to create a constructive working team. The effective organization, communication and trouble shooting strategies described in this guide will help your group work productively to complete its task.</p>
          <p className="loyalty">Working for my current employer has shown me great sense of longevity, dedication, and commitment. I have continued my education, by going to Rutgers Coding Bootcamp and through constant self-teaching.</p>
      </div>
    );
  }
}


class TypedReact extends React.Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };
    // var Type = TypedReact;
    // this.Type = new Type(this.el, options);
  }

  componentWillUnmount() {

    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TypedReact
    strings={[
      'Hello World!'
    ]}
  />,
  document.getElementById('react-root')
);

export default App;
