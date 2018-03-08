class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>By Andrew Mead</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should i do?</button>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
  </div>
);

const appRoot = document.getElementById("app")
ReactDOM.render(jsx, appRoot);