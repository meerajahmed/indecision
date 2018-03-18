const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
/*
* default export cannot come before var declaration unlike name export,
* with an exception of class definition
*
* The right way would be:
*  1. export default subtract;
*  2. export default (a, b) => a - b; // export expression
*  3. export { subtract  as default }
*
* */


// named exports
export {
  square,
  add,
  subtract as default
}