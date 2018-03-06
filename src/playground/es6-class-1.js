
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

class Student extends Person {

  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if( this.hasMajor() ){
      description += ` Their major is ${this.major}`;
    }
    return description;
  }

}

const instructor = new Student('Andrew Mead', 26, 'Computer Science');
console.log(instructor.getGretting());
console.log(instructor.getDescription());

const me = new Student();
console.log(me.getGretting());
console.log(me.getDescription());