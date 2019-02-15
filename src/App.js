import React, { Component } from 'react';
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.rotating);
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
          <img 
            src={logo} 
            className={
              "App-logo" + 
              (this.props.rotating ? "":" App-logo-paused")
            } 
            alt="logo"
          />
          <button onClick={
              this.props.rotating ? 
                this.props.stopAction : this.props.startAction
          }>{this.props.text}</button>
        </header>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);