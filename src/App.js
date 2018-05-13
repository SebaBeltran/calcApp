import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      input:"",
      firstInput:"",
      secondInput: "",
      operation: "",
      result: "",
      history:""
    }
  }

  getInput(val){
    if(this.state.input.length <= 9){
      this.setState({input: val})
    } else{
      this.setState({input:val.substr(0, 10)})
    }
  }

  addToDisplay(val){
    if(this.state.input.length <= 9){
      let value = this.state.input
      this.setState({input: value + val})
    }  
  }

  getSum(val){
      let hist = this.state.history + val + " + ";
      this.setState({firstInput: val, input:"", operation: "+", history: hist})
  }
  getSubtraction(val){
    let hist = this.state.history + val + " - ";
    this.setState({firstInput: val, input:"", operation: "-", history: hist})
  }
  getDivision(val){
    let hist = this.state.history + val + " / ";
    this.setState({firstInput: val, input:"", operation: "/", history: hist})
  }
  getMultiplication(val){
    if(!NaN){
      let hist = this.state.history + val + " * ";
      this.setState({firstInput: val, input:"", operation: "*", history: hist})
    }  
  }

  getResult(val1, op, val2){
    if(op === "+"){
      let sum = +val1 + +val2;
      let hist = val1 + " " + op + " " + val2;
      this.setState({input:"", result: sum, firstInput: sum, history: hist});
    } else if(op === "-"){
      let subtraction = +val1 + -val2;
        this.setState({input:"", result: subtraction, firstInput: subtraction});
    } else if(op === "*"){
        let multiplication = +val1 * +val2;
        if(multiplication.toString().length > 10){
          multiplication = multiplication.toString().slice(0, 10)
        }  
        this.setState({input:"", result: multiplication, firstInput: multiplication});
    } else if(op ==="/"){
        let division = +val1 / +val2;
        this.setState({input:"", result: division, firstInput: division});
    }
  }

  getKey(event, val1, op, val2) {
    if (event === 13 && this.state.firstInput !== "" && this.state.input !== "") {
      this.getResult(val1, op, val2);
    }     
  }

  eraseCurrent(){
    this.setState({input:""})
  }
  eraseAll(){
    // this.
    this.setState({input:"", firstInput:"", secondInput: "", operation: "", result: "", history: ""})
  }

  render() {
    return (
      <div className="wrapper">
      <h1>Calcoolator</h1>
        <div className="App">
          <div className="calc">
            <div className="display">
              <div className="showNum">{this.state.history}</div>
              <div className="result">{Math.floor(this.state.result)}</div>
              <input id="display" className="dispNum" value={this.state.input} type="number" onChange={(e) => this.getInput(e.target.value)}onKeyDown={(e)=>this.getKey(e.keyCode, this.state.firstInput, this.state.operation, this.state.input)}/>
            </div>
            <div className="keypad">
              <div className="buttonRow">
                <button className="button" onClick={()=>this.eraseAll()}>AC
                </button>
                <button className="button" onClick={()=>this.eraseCurrent()}>C
                </button>
                <button className="button">%
                </button>
                <button className="button" onClick={()=>this.getSum(this.state.input)}>+
                </button>
              </div>
              <div className="buttonRow">
                <button className="button" onClick={()=>this.addToDisplay(7)}>7</button>
                <button className="button" onClick={()=>this.addToDisplay(8)}>8</button>
                <button className="button" onClick={()=>this.addToDisplay(9)}>9</button>
                <button className="button" onClick={()=>this.getSubtraction(this.state.input)}>-</button>
              </div>
              <div className="buttonRow">
                <button className="button" onClick={()=>this.addToDisplay(4)}>4</button>
                <button className="button" onClick={()=>this.addToDisplay(5)}>5</button>
                <button className="button" onClick={()=>this.addToDisplay(6)}>6</button>
                <button className="button" onClick={()=>this.getMultiplication(this.state.input)}>*</button>
              </div>
              <div className="buttonRow">
                <button className="button" onClick={()=>this.addToDisplay(1)}>1</button>
                <button className="button" onClick={()=>this.addToDisplay(2)}>2</button>
                <button className="button" onClick={()=>this.addToDisplay(3)}>3</button>
                <button className="button" onClick={()=>this.getDivision(this.state.input)}>/</button>
              </div>
              <div className="buttonRow">
                <button className="button" onClick={()=>this.addToDisplay(0)}>0</button>
                <button className="button" onClick={()=>this.addToDisplay(".")}>.</button>
                <button className="button equal" onClick={()=>this.getResult(this.state.firstInput, this.state.operation, this.state.input)}>=</button>
              </div>
              
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
