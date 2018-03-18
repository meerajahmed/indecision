import React from "react";

import Option from "./option";

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      { !props.options.length && <p>Please add an option to get started</p> }
      {
        props.options.map((option, index) => {
          return (
            <Option
              key={index}
              option={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })
      }
    </div>
  );
};

export default Options;