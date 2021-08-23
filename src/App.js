import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends React.Component{
  state = {count : 0}

  plus= () => {
    this.setState({count : this.state.count + 1})
  }


  render() {
    const {count} = this.state
    return(
    <>
    <div className="App">{count}</div>
    <button onClick={this.plus}>PLUS</button>
    </>
    )
  };
}

export default App;
