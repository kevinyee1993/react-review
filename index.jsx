import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './components/test_component';
import TestComponent2 from './components/test_component2';
import Comment from './components/comment';
import CheckBox from './components/checkbox';

function Root() {
  return(
    <div>
      <CheckBox />
      <Comment>Hello</Comment>
      <Comment>My</Comment>
      <Comment>Nem</Comment>
      <Comment>Jeff</Comment>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
