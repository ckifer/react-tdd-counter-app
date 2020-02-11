import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //const [count, setCount] = useState(0);
  //const increment = () => setCount(count + 1);

  state = {
    count: 0
  };
  increment = () => this.setState({ count: count + 1 });
  render() {
    return (
      <div className='App' data-test='component-app'>
        <h1>Counter: {this.state.count}</h1>
        <button
          id='increment'
          type='button'
          onClick={this.increment}
          style={{ marginBottom: '20px' }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default App;
