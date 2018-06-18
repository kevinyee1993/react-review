import React from 'react';
import ReactDOM from 'react-dom';

export default class Comment extends React.Component {

  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }

  edit() {
    alert("editing comment");
  }

  delete() {
    this.props.removeComment(this.props.index);
  }

  render() {
    return(
      <div>
        <h1 className="heading">{ this.props.children }</h1>
        <button onClick={ this.edit }>Edit</button>
        <button onClick={ this.delete }>Delete</button>
      </div>
    );
  }
}
