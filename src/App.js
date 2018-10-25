import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  // 2 constructor is called
  constructor(props) {
    super(props);

    // Must initialize state first
    this.state = { count: 0 };
  }

  // 6 click handler is called
  // 8 setState() called
  handleClick() {
    // Increment the count when the button is clicked
    this.setState({
      count: this.state.count + 1
    }, function() {
      // setState is asynchronous! This function gets called
      // when it's finished.
      console.log("Job's done");
    });
  }

  // 3 render is called
  // 7 later render is called
  render() {
    return (
      <div className="app">
        <div className="click-count">
          Button presses: {this.state.count}
        </div>
        <button onClick={this.handleClick.bind(this)}>
          Add One
        </button>
      </div>
    );
  }
}

// 1 intiaial page load
ReactDOM.render(
  <App />,
  document.getElementById('container')
);

export default App;
