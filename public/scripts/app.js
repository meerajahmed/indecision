'use strict';

var appRoot = document.getElementById('app');
var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    React.createElement(
      'div',
      null,
      visibility && React.createElement(
        'p',
        null,
        'Hey, ther are some details you can see'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
