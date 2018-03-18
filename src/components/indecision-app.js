import React from "react";

import Header from "./header";
import Action from "./action";
import Options from "./options";
import AddOption from "./add-option";

export default class IndecisionApp extends React.Component {

  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  /* Component lifecycle methods */

  /*
   * Mounting: These methods are called when an instance of a component is being created and inserted into the DOM
   *   constructor()
   *
   *   componentWillMount()
   *   render()
   *   componentDidMount()
   *
   * Updating: An updae can be caused by chamges to props or state.
   * These methods are called when a component is being re-rendered.
   *
   *   componentWillReceiveProps()
   *   shouldComponentUpdate()
   *
   *   componentWillUpdate()
   *   render()
   *   componentDidUpdate()
   *
   * Unmounting: This method is called when a component is being removed from the DOM.
   *
   * compoWillUnmount()
   *
   * */

  componentDidMount() {
    console.log("componentDidMount: called first time when component gets mounted on DOM");
    try {
      const jsonStr = localStorage.getItem("options");
      const options = JSON.parse(jsonStr);
      if( options ){
        this.setState(() => ({options}));
      }
    } catch (e) {
      console.log("Invalid JSON data");
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: called after props / state value changed");
    if( prevState.options.length !== this.state.options.length ){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: called before component goes away");
  }

  render() {
    const title = "Indecision";
    const subtitle = "By Andrew Mead";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [], error: undefined}));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => (
      { options: prevState.options.filter((option) => optionToRemove !== option ),
        error: undefined
      }
    ));
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if(!option){
      return "Enter valid value to add item";
    } else if(this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
  }

}

IndecisionApp.defaultProps = {
  options: []
};