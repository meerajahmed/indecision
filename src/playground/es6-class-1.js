
class Person {

  constructor( name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi, i am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const instructor = new Person('Andrew Mead', 26);
console.log(instructor.getGretting());
console.log(instructor.getDescription());

const me = new Person();
console.log(me.getGretting());
console.log(me.getDescription());