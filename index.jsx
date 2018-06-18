import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './components/test_component';
import TestComponent2 from './components/test_component2';
import Comment from './components/comment';
import CheckBox from './components/checkbox';
import ColorChange from './components/color_change';
import RefsComponent from './components/refs_component';
import ParentComment from './components/parent_comment_component';


function Root() {
  return(
    <div>
      <ParentComment />
      <RefsComponent />
      <RefsComponent />
      <CheckBox />
      <ColorChange />
      <Comment fart="fart">Hello</Comment>
      <Comment>My</Comment>
      <Comment>Nem</Comment>
      <Comment>Jeff</Comment>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
