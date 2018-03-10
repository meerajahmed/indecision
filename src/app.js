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
  render() {
    return (
      <div>
        <button>What should i do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return (
      <div>
        AddOptions component here
      </div>
    );
  }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, appRoot);