class Header extends React.Component {
  render(){
    return <p>React Header Component</p>
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header/>
  </div>
);

const appRoot = document.getElementById("app")
ReactDOM.render(jsx, appRoot);