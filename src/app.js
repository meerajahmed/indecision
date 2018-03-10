class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "By Andrew Mead";
    const options = ["option one", "option two", "option three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    console.log("handle pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do?</button>
      </div>
    );
  }
}

class Options extends React.Component {

  constructor(props){
    super(props);
    // bind once
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
     console.log("handleRemoveAll");
     console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map( (option, index) => {
            return <Option key={index} option={option} />;
          })
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>{this.props.option}</div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
     console.log(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, appRoot);