"use strict";

// JSX -> JavaScript XML

var template = React.createElement(
  "h1",
  { id: "app-root" },
  "Hello World"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
