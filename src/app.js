// JSX -> JavaScript XML

var user = {
  name: "Andrew Mead",
  age: 26,
  location: "Philadelphia"
};

var template = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);