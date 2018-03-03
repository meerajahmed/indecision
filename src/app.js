// JSX -> JavaScript XML

var user = {
  name: "Andrew Mead",
  age: 26,
  location: "Philadelphia"
};

var getLocation = function(location){
  if(location) {
    return <p>Location: {location}</p>
  }
};

var template = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age > 17) && <p>Age: {user.age }</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);