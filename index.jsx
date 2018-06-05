import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
  return(
    <div>
      This is working
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
