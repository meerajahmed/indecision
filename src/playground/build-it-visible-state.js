class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  toggleVisibility() {
    this.setState((previousState) => {
      return {
        visibility: !previousState.visibility
      };
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          { this.state.visibility ? 'Hide details': 'Show details'}
        </button>
        <div>
          { this.state.visibility && (
            <p>
              Hey, ther are some details you can see
            </p>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))