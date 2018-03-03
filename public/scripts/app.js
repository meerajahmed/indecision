"use strict";

// JSX -> JavaScript XML -> React template language
// const -> use const when you want to catch error of variable redeclaration, assignment and block level scope
// let -> use let if we indent to resign the variable and has block level scoping

var user = {
  name: "Andrew Mead",
  age: 26,
  location: "Philadelphia"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age > 17 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
