import React, { Component } from 'react';
import './App.css';

// use class based component for now
class App extends Component {
  state = {
    count: 0,
    error: false
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className='App' data-test='component-app'>
        <h1 data-test='counter-display' id='counter-display'>
          Counter: {this.state.count}
        </h1>
        <button
          type='button'
          onClick={() =>
            this.setState({ count: this.state.count + 1, error: false })
          }
          style={{ marginRight: '10px' }}
          data-test='increment-button'
        >
          Increment
        </button>
        <button
          type='button'
          onClick={this.decrement}
          style={{ marginLeft: '10px' }}
          data-test='decrement-button'
        >
          Decrement
        </button>
        {this.state.error && (
          <h1
            data-test='error-display'
            id='error-display'
            style={{ color: 'red' }}
          >
            Cannot decrement below 0!
          </h1>
        )}
      </div>
    );
  }
}

export default App;
