import React from "react";
import './App.css';
import { connect } from "react-redux";
import { IncAction } from "./actions";
import { DecAction } from "./actions";

const App = ({local_variable,IncAction,DecAction}) => {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <h1>React Redux App</h1>
        <h1>{local_variable}</h1>
        <div>
        <button onClick={IncAction}>Increment</button>
        <button onClick={DecAction}>Decrement</button>
        </div>
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  local_variable : state
})
export default connect(mapStateToProps,{IncAction,DecAction})(App);
