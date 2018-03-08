class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>By Andrew Mead</h2>
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
        Options component here
      </div>
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

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

const appRoot = document.getElementById("app")
ReactDOM.render(jsx, appRoot);