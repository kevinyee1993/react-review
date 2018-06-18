import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';

export default class ParentComment extends React.Component {
  constructor() {
    super();

    this.state = {
      array: [1,2,3]
    };

    this.removeComment = this.removeComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    let arr = this.state.array;
    let comment = 4;
    arr.push(comment);
    this.setState({comments: arr});
  }

  removeComment(i) {
    let arr = this.state.array;
    arr.splice(i, 1);
    this.setState({ array: arr });
  }

  render() {
    return(
      <div>
        <button onClick={ this.addComment }> Add </button>
        {
          this.state.array.map((el, idx) => <Comment key={ idx }
          index={ idx }
          removeComment = { this.removeComment }>
           { el }
          </Comment> )
        }
      </div>
    );
  }
}
