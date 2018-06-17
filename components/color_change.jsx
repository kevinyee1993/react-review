import React from 'react';
import ReactDOM from 'react-dom';

export default class ColorChange extends React.Component {
  constructor() {
    super();

    this.state = { color: "blue" };
    this.colors = ["blue", "yellow", "green", "red"];
    this.changeColor = this.changeColor.bind(this);
  }


  changeColor() {
    let randColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.setState({color: randColor});
  }


  render() {
    return(
      <div>
        <p onClick={ this.changeColor } className={ this.state.color }>I am { this.state.color }</p>
      </div>
    );
  }
}
