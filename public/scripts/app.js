"use strict";

// JSX -> JavaScript XML

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Andrew Mead"
  ),
  React.createElement(
    "p",
    null,
    "Age: 26"
  ),
  React.createElement(
    "p",
    null,
    "Location: Philadelphia"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
