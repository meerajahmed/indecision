/*
* stateless functional component -> presentational component
* */

class IndecisionApp extends React.Component {

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
    this.setState(() => ({ options: []}));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => (
      { options: prevState.options.filter((option) => optionToRemove !== option )}
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {
        props.subtitle && <h2>{props.subtitle}</h2>
      }
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
        What should i do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
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

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        onClick={(e) => props.handleDeleteOption(props.option)}
      >
      remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {

  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

  }

  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp options={["Option one", "Option two"]} />, appRoot);