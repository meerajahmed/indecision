/*
 * Component state -> allow component to manage some component data.
 * whenever the component data changes the component will re-render to reflect those changes
 * */

 class Counter extends React.Component {
   constructor(props){
     super(props);
     //1. set default state
     this.state = {
       count: props.count
     };
     this.addOne = this.addOne.bind(this);
     this.minusOne = this.minusOne.bind(this);
     this.reset = this.reset.bind(this);
   }

   addOne(){
     this.setState((previousState) => {
       return {
         count: previousState.count + 1
       };
     });
   }

   minusOne(){
     this.setState((previousState) => {
       return {
         count: previousState.count - 1
       };
     });
   }

   reset(){
     this.setState(() => {
       return {
         count: 0
       };
     });
   }

   render(){
     return (
       <div>
         <h1>Count: {this.state.count}</h1>
         <button onClick={this.addOne}>+1</button>
         <button onClick={this.minusOne}>-1</button>
         <button onClick={this.reset}>reset</button>
       </div>
     );
   }
 }

Counter.defaultProps = {
  count: 0
};

 ReactDOM.render(<Counter count={-10} />, document.getElementById("app"));