"use strict";

// JSX -> JavaScript XML -> React template language
// const -> use const when you want to catch error of variable redeclaration, assignment and block level scope
// let -> use let if we indent to resign the variable and has block level scoping
/*
* Arrow functions:
*   are anonymous, we cannot have named arrow functions
*   are not bound to function arguments and this kewword
* */

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

var count = 0;

var addOne = function addOne() {
  console.log("addOne");
};

var minusOne = function minusOne() {
  console.log("minusOne");
};

var reset = function reset() {
  console.log("reset");
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
