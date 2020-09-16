import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars';

  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = true;


    return (
      <div className='App'>
        <h1>Hello { name }</h1>
        <h1> Hello {name.toUpperCase() } </h1>
        {loading ? (
          <h4>Loading...</h4>
        ): (
          //<h1>Hello {showName ? name: null}</h1>
          <h1>Jello {showName && name }</h1>
        )}
      </div>
    );
  }
}

export default App;
