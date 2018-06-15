import React from 'react';
import ReactDOM from 'react-dom';

export default class TestComponent extends React.Component {
  render() {
    return(
      <div>
        <h1>{ this.props.title }</h1>
        <h1>{ this.props.author }</h1>
      </div>
    );
  }
}
