import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './components/test_component';
import TestComponent2 from './components/test_component2';

function Root() {
  return(
    <div>
      <TestComponent />
      <TestComponent2 />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
