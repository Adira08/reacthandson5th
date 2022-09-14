import React, { PureComponent } from 'react';
// import User from './User';

class Pure extends PureComponent{
  constructor(){
    super();
    this.state={
      count: 0
    }
  }

  render(){
    console.warn('render');
    return (
      <div className="App">
        <header className="App-header">

          <h2>Pure Component State Count : {this.state.count}</h2>

          
          <button onClick={()=>{this.setState({count: this.state.count+1})}} style={{margin: "5px",backgroundColor:"Black", color:"White"}}>Increment</button>
          
          <button onClick={()=>{this.setState({count: this.state.count-1})}} style={{margin: "5px",backgroundColor:"Black", color:"White"}}>Decrement</button>
        </header>
      </div>
    );
  }

}

export default Pure;