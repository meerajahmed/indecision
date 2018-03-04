const app = {
  title: "Indecision App",
  subtitle: "By Andrew Mead",
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if( option ){
    app.options.push(option);
    event.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render()
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options": "No options"}</p>
      <p>options: {app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>Make Decision</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        {
          app.options.map((option, index) => <li key={index}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();