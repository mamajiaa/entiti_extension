import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from 'components/TestComponent';

function Popup() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById('root'));

export default Popup;