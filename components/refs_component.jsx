import React from 'react';
import ReactDOM from 'react-dom';

export default class RefsComponent extends React.Component {
  constructor() {
    super();
    this.printRefs = this.printRefs.bind(this);
  }

  printRefs() {
    console.log(this.refs.textArea1.value);
  }

  render() {
    return (
      <div>
        <textarea ref="textArea1"></textarea>
        <button onClick={ this.printRefs }>Print refs content</button>
      </div>
    );
  }


}
