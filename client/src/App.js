import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { saludo: "" }

  // Fetch passwords after first mount
  componentDidMount() {
    this.geSaludo();
  }

  geSaludo = () => {
    // Get the passwords and store them in state
    fetch('/api/hola')
      .then( res =>  res.json() )
      .then(res => this.setState ( { saludo: res.saludo } ) )
      .catch(err => console.log(err))
  }

  render() {
    const { saludo } = this.state;

    return (
      <div className="App">
        { saludo }
      </div>
    );
  }
}

export default App;