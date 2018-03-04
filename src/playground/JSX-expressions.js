// JSX -> JavaScript XML -> React template language
// const -> use const when you want to catch error of variable redeclaration, assignment and block level scope
// let -> use let if we indent to resign the variable and has block level scoping
/*
 * Arrow functions:
 *   are anonymous, we cannot have named arrow functions
 *   are not bound to function arguments and this kewword
 * */

const user = {
  name: "Andrew Mead",
  age: 26,
  location: "Philadelphia"
};

function getLocation(location){
  if(location) {
    return <p>Location: {location}</p>
  }
}

const template = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age > 17) && <p>Age: {user.age }</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
