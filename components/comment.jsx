import React from 'react';
import ReactDOM from 'react-dom';

export default class Comment extends React.Component {

  edit() {
    alert("editing comment");
  }

  delete() {
    alert("deleting comment");
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
