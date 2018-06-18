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
  }

  removeComment(i) {
    let arr = this.state.array;
    arr.splice(i, 1);
    this.setState({ array: arr });
  }

  render() {
    return(
      <div>
        {
          this.state.array.map((el, idx) => <Comment key={ idx } index={ idx } removeComment = { this.removeComment }>
           { el }
          </Comment> )
        }
      </div>
    );
  }
}
