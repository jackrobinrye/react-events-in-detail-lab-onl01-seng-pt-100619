import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);


// These components are children of the div above them

// <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
// <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  

// we are passing down the props of
// onReceiveCoordinates to CoordinatesButton
// and
// onDelayedClick to DelayedButton

// Therfore both of those components will have those as props
// ie this.props.onReceiveCoordinates
// and
// this.props.onDelayedClick