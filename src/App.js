import React, { Component } from 'react';
import Shape from './Shape';

class Selector extends Component {
  constructor() {
    super();
    
    // stateful component
    // the data that is being constantly changed/updated along with render()
    this.state = {
      shape: 'Have not clicked on a shape',
    };
  }

  selectShape = shapeName => {
    // changes state and triggers the render function 
    this.setState({
        shape: shapeName,
     });
  }
  
  render() {
    return (
       <div className="container"> 
         <div className="navbar">
          <div>Selected: <span> {this.state.shape} </span> </div>
         </div>
         <div className="shape-list"> Shape List 
           <Shape shape="square"/>
           <Shape shape="circle"/>
           <Shape shape="triangle"/>
         </div>
       </div>
    );
  };
}

// export class component
export default Selector;