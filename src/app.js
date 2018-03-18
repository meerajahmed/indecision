import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/indecision-app";
import "./style/style.scss";

const appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp options={["Option one", "Option two"]} />, appRoot);