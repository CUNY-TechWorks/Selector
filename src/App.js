import React, { Component } from 'react';
import Shape from './Shape';
import NavBar from './NavBar';

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
    if(shapeName !== 'shape-list') {
      this.setState({
         shape: shapeName,
      });
    }
  }
  
  // Another way to add onClick dynamically to the Shape function, you can
  // create another prop name selectShape and set it equal to this.selectShape
  // Now in the Shape.js file, add the onClick event to the div tag and set it 
  // equal to a function, in which you call the selectShape function and pass it shape
  render() {
    return (
       <div className="container"> 
         <div className="navbar">
          <div> Selected:
            <NavBar shape={this.state.shape}/>
          </div>
         </div>
         <div className="shape-list" onClick={e => this.selectShape(e.target.className)}> Shape List 
           <Shape shape="square"/>
           <Shape shape="circle"/>
           <Shape shape="triangle"/>
           <Shape shape="oval"/>
           <Shape shape="trapezium"/>
         </div>
       </div>
    );
  };
}

// export class component
export default Selector;