import React, { Component } from 'react';
import Shape from './Shape';
import NavBar from './NavBar';
import Footer from './Footer';

class Selector extends Component {
  constructor() {
    super();
    
    // stateful component
    // the data that is being constantly changed/updated along with render()
    this.state = {
      shape: 'Have not clicked on a shape',

      clickAmount: 0,
      
      square: 0,
      circle: 0,
      triangle: 0,
      oval: 0,
      trapezium: 0,
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
  increaseCounter = shapeName => {
    if(shapeName !== 'shape-list') {
      this.setState({
        clickAmount: this.state.clickAmount + 1,
      });
    }
  }
  countIndividual = shapeName => {
     for(let key in this.state) {
        if(shapeName === 'square') {
          this.setState({
            square: this.state.square + 1,
          });
        }
        else if(shapeName === 'circle') {
          this.setState({
            circle: this.state.circle + 1,
          });
        }
        else if(shapeName === 'triangle') {
          this.setState({
            triangle: this.state.triangle + 1,
          });
        }
        else if(shapeName === 'oval') {
          this.setState({
            oval: this.state.oval + 1,
          });
        }
        else {
          this.setState({
            trapezium: this.state.trapezium + 1,
          });
        }
     }
  }

  reset = () => {
    this.setState({
       shape: 'Have not clicked on a shape',
       clickAmount: 0,
       square: 0,
       circle: 0,
       triangle: 0,
       oval: 0,
       trapezium: 0
    });
  }

  onClick = event => {
    this.selectShape(event.target.className);
    this.increaseCounter(event.target.className);
    this.countIndividual(event.target.className);
  }
  
  // Another way to add onClick dynamically to the Shape function, you can
  // create another prop name selectShape and set it equal to this.selectShape
  // Now in the Shape.js file, add the onClick event to the div tag and set it 
  // equal to a function, in which you call the selectShape function and pass it shape
  render() {
    return (
       <div className="container"> 

         <div className="navbar">
          <span> Selected: {this.state.shape}, </span>
          <div>
            <NavBar shape={this.state.shape}/>
          </div>
         </div>

         <div className="shape-list" onClick={this.onClick}> Shape List 
           <Shape shape="square"/>
           <Shape shape="circle"/>
           <Shape shape="triangle"/>
           <Shape shape="oval"/>
           <Shape shape="trapezium"/>
         </div>

         <div className="footer">
           <div className="box1"> 
              Amount of times you clicked on a shape:
              <Footer counter={this.state.clickAmount}/>
           </div>
           <div className="box2">
              Individual Clicks: 
              <ol className="lists">
                <li> Square: {this.state.square} </li>
                <li> Circle: {this.state.circle} </li>
                <li> Triangle: {this.state.triangle} </li>
                <li> Oval: {this.state.oval} </li>
                <li> Trapezium: {this.state.trapezium} </li>
              </ol>
           </div>
         </div>

         <div className="bottom"> 
            <button className="button" onClick={this.reset}> Reset </button>
         </div>

       </div>
    );
  };
}

// export class component
export default Selector;