let count = 0;

const addOne = () => {
  count++;
  renderReactApp();
};

const minusOne = () => {
  count--;
  renderReactApp();
};

const reset = () => {
  count = 0;
  renderReactApp();
};

const appRoot = document.getElementById("app");

const renderReactApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderReactApp();