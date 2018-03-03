"use strict";

// JSX -> JavaScript XML

var user = {
  name: "Andrew Mead",
  age: 26,
  location: "Philadelphia"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
