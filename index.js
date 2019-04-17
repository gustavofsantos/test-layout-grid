import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="app">
        <div className="top-bar">
          teste na top-bar
        </div>

        <div className="app-content">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
        </div>

        <div className="bottom-bar">
          teste na bottom-bar
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
