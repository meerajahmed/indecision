const app = {
  title: "Indecision App",
  subtitle: "By Andrew Mead",
  options: []
};


const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options": "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);