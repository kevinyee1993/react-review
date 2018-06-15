import React from 'react';
import ReactDOM from 'react-dom';

export default class ColorChange extends React.Component {
  constructor() {
    super();

    this.state = { color: "blue" };
    this.changeColor = this.changeColor.bind(this);
  }


  changeColor() {
    this.setState({color: "green"});
  }


  render() {
    return(
      <div>
        <p onClick={ this.changeColor } className={ this.state.color }>I am { this.state.color }</p>
      </div>
    );
  }
}
